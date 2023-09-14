import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, Animated, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_MEDITATION_QUERY } from "../queries";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useMutation } from "@apollo/client";
import { SelectList } from "react-native-dropdown-select-list";
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
// });

const { width, height } = Dimensions.get("window");
const circleWidth = width / 2;

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const MeditationTimer = () => {
  const [selected, setSelected] = React.useState(0);
  const [alert, setAlert] = React.useState("");
  const [timerRunning, setTimerRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const intervalRef = useRef();
  const [userInfo, setUserInfo] = useState({userEmail: "",
    totalSittingTime: 0});
    const [sendStats] = useMutation(GET_MEDITATION_QUERY, {
      variables: {
        userEmail: userInfo?.email || "",
        totalSittingTime: duration,
      }
    });
  
  
  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getData();
      setUserInfo(data);
    };
    
    
    fetchUserInfo();
    if (selected && duration >= selected*60 && userInfo) {
      setTimerRunning(false);
      startStopTimer();
      startAnimation();
      setStartButton("Meditation Complete!")      
      sendStats()
      setDuration(0)
    } else if (selected && duration >= selected*60 ) {
      setTimerRunning(false);
      startStopTimer();
      startAnimation();
      setStartButton("Meditation Complete!")
      setDuration(0)
    }
  }, [duration]);

  const handleButtonPress = () => {
    if (selected) {
      startAnimation();
      startStopTimer();
      setAlert("")
    } else {
      setAlert("Please select meditation time!")
    }
  };

  const startStopTimer = () => {
    if (startButton === "Begin" || startButton === "Begin Again") {
      setTimerRunning(true);
      intervalRef.current = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    } else {
      setTimerRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const move = useRef(new Animated.Value(0)).current;
  const [startButton, setStartButton] = useState("Begin");

  const startAnimation = () => {
    if (startButton === "Begin" || startButton === "Begin Again") {
      setStartButton("Pause");
      Animated.loop(
        Animated.sequence([
          Animated.timing(move, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            delay: 1000,
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      setStartButton("Begin Again");
      Animated.loop(
        Animated.sequence([
          Animated.timing(move, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(move, {
            delay: 1000,
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ])
      ).stop();
    }
  };

  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6],
  });

  return (
    <ImageBackground testID="timer-background" source={require("../../assets/home-temple.jpg")} style={styles.backgroundImage}>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[
          {key: 5, value:'5 Minutes'},
          {key: 10, value:'10 Minutes'},
          {key: 15, value:'15 Minutes'},
          {key: 20, value:'20 Minutes'},
          {key: 25, value:'25 Minutes'},
          {key: 30, value:'30 Minutes'},
          {key: 35, value:'35 Minutes'},
          {key: 40, value:'40 Minutes'},
          {key: 45, value:'45 Minutes'},
          {key: 50, value:'50 Minutes'},
          {key: 55, value:'55 Minutes'},
          {key: 60, value:'60 Minutes'},
      ]} 
        save="key"
        placeholder="Select Length of Meditation"
        boxStyles={{
          backgroundColor: "white",
        }}
        dropdownStyles={{
          backgroundColor: "white",
          position: "absolute",
          width: "100%",
          marginTop: 50,
        }}
        dropdownTextStyles={{
          fontSize: 15
        }}
        searchPlaceholder= "Select Length of Meditation"
        searchicon= {<Text> </Text>}
    />  
    <Text style={{
          color: "white",
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
          paddingTop: 15,
        }}>
          {alert}
    </Text>  
      <View style={styles.container}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          const rotation = move.interpolate({
            inputRange: [0, 1],
            outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
          });
          return (
            <Animated.View
              testID="breath-animation"
              key={item}
              style={{
                opacity: 0.1,
                backgroundColor: "#FCBB2E",
                width: circleWidth,
                height: circleWidth,
                borderRadius: circleWidth / 2,
                ...StyleSheet.absoluteFill,
                transform: [
                  {
                    rotateZ: rotation,
                  },
                  { translateX: translate },
                  { translateY: translate },
                ],
              }}
            ></Animated.View>
          );
        })}
        <View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity testID="press" onPress={handleButtonPress}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                color: "white",
              }}
            >
              {startButton}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    left: width / 4,
    top: height / 4,
  },
  message: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginTop: 20,
  },
});

export default MeditationTimer;