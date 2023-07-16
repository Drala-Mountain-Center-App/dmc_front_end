import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    throw new Error("Failed to retrieve user info.");
  }
};

const MeditationStats = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getData();
        setUserInfo(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!userInfo) {
    return (
      <View style={styles.loadingContainer}>
        <Text>No current meditations. Please login and let's get zen!</Text>
      </View>
    );
  }

  const imageStyle = {
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.meditationStatsText}>
        {userInfo.firstName}'s Meditation Stats:
      </Text>
      <View style={styles.statsContainer}>
        <Text style={styles.meditationStatsItem}>
          Total Meditations: {userInfo.totalMeditations}
        </Text>
        <Text style={styles.meditationStatsItem}>
          Total Time Spent Meditating: {userInfo.totalMeditationTime}
        </Text>
        <Text style={styles.meditationStatsItem}>
          Average Time Spent Meditating: {userInfo.averageMeditationTime}
        </Text>
      </View>
      <Animated.Image
        source={require("../../assets/meditation.png")}
        style={[styles.image, imageStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 20,
    backgroundColor: "#f5f2ec",
    color: "#3c304a",
  },
  meditationStatsText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#383240",
  },
  statsContainer: {
    padding: 10,
    width: "80%",
  },
  meditationStatsItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
});

export default MeditationStats;
