import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, Animated, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_MEDITATION_QUERY } from "../queries";
import { useMutation } from "@apollo/client";
import { Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isWeb = () => Platform.OS === "web";

// const circleWidth = width / 2;
const circleWidth = isWeb() ? width / 4 : width / 2;
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    setDataError(e.toString());
  }
};

const MeditationTimer = () => {
  const [dataError, setDataError] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [duration, setDuration] = useState(1190);
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
    if (duration >= 1200 && userInfo) {
      setTimerRunning(false);
      startStopTimer();
      startAnimation();
      setStartButton("Meditation Complete!")      
      sendStats()
      setDuration(0)
    } else if (duration >= 1200) {
      setTimerRunning(false);
      startStopTimer();
      startAnimation();
      setStartButton("Meditation Complete!")
      setDuration(0)
    }
  }, [duration]);

  const handleButtonPress = () => {
    startAnimation();
    startStopTimer();
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
    <View style={styles.background}>
      <ImageBackground
        testID="timer-background"
        source={require("../../assets/home-temple.jpg")}
        style={styles.backgroundImage}
      >
        {dataError && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Error: {dataError}</Text>
          </View>
        )}

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
            {/* {duration >= 1200 && (
            <Text style={styles.message}>Nice meditation!</Text>
          )} */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:  "#383240",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: isWeb() ? "60%" : "100%",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: isWeb() ? "30%" : 0,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: isWeb() ? width/12 : width / 4,
    top: height / 4,
  },
  timer: {
    width: isWeb() ? "60%" : "100%",
    height: isWeb() ? "60%" : "100%",
    marginRight: isWeb() ? "30%" : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginTop: 20,
  },
  errorContainer: {
    backgroundColor: "rgba(255,0,0,0.2)",
    padding: 10,
    borderRadius: 4,
    margin: 10,
  },
  errorText: {
    color: "white",
    fontSize: 16,
  },
});

export default MeditationTimer;