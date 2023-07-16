import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@apollo/client";
import { Get_User_Email_Query } from "../queries";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    throw new Error("Failed to retrieve user info.");
  }
};

const MeditationStats = () => {
  const [userEmail, setUserEmail] = useState("");
  const {
    loading,
    error,
    data: meditationStats,
    refetch,
  } = useQuery(Get_User_Email_Query, {
    variables: { email: userEmail },
  });
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getData();
      setUserEmail(data.email);
      console.log(data.email, "line 26");
      console.log(userEmail, "line 27");
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    refetch();
  }, [userEmail]);


  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (!userEmail || !meditationStats) {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  if (!meditationStats) {
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
        {meditationStats.userByEmail.firstName}'s Meditation Stats:
      </Text>
      <View style={styles.statsContainer}>
        <Text style={styles.meditationStatsItem}>
          Total Meditations: {meditationStats.userByEmail.totalMeditations}
        </Text>
        <Text style={styles.meditationStatsItem}>
          Total Time Spent Meditating:{" "}
          {meditationStats.userByEmail.totalMeditationTime}
        </Text>
        <Text style={styles.meditationStatsItem}>
          Average Time Spent Meditating:{" "}
          {meditationStats.userByEmail.averageMeditationTime}
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
    backgroundColor: "#F5F2EC",
    color: "#3C304A",
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
