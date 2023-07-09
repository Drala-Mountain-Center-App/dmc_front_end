import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, Animated, TouchableOpacity } from "react-native";

const {width, height } = Dimensions.get("window");
const circleWidth = width / 2;

const MeditationTimer = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const intervalRef = useRef();

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
      console.log(`${duration} seconds meditated`)
    }
  };

  const move = useRef(new Animated.Value(0)).current;
  const [startButton, setStartButton] = useState("Begin");
  
  const startAnimation = () =>  { 
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
      ).start()
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
      ).stop()
    }
  }
  const translate = move.interpolate({
    inputRange: [0,1],
    outputRange: [0, circleWidth / 6],
  })
  return (
    <ImageBackground
      source={require("./assets/home-temple.jpg")} 
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          const rotation = move.interpolate({
            inputRange: [0,1],
            outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`]
          })
          return (
          <Animated.View 
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
                { translateY: translate }
              ]
            }}
          ></Animated.View>
        )})}
        <View
          style={{
            width: circleWidth,
            height: circleWidth,
            ...StyleSheet.absoluteFill,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={handleButtonPress}>
            <Text 
              style={{ 
                fontSize: 25, 
                fontWeight: 500,
                color: "white" 
              }}> {startButton} 
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
});

export default MeditationTimer;