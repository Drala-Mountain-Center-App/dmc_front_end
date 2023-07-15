import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@apollo/client";
import { Get_User_Email_Query } from "../queries";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const MeditationStats = () => {
  const [userEmail, setUserEmail] = useState("");
  const { loading, error, data: meditationStats, refetch } = useQuery(Get_User_Email_Query, {
    variables: { email: userEmail },
  });

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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (!userEmail || !meditationStats) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {console.log(meditationStats)}
      <Text>{meditationStats.userByEmail.firstName} Meditation Stats:</Text>
      <Text>Total Meditations: {meditationStats.userByEmail.totalMeditations}</Text>
      <Text>Total Time Spent Meditating: {meditationStats.userByEmail.totalMeditationTime}</Text>
      <Text>Average Time Spent Meditating: {meditationStats.userByEmail.averageMeditationTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#f5f2ec",
    color: "#3c304a",
  },
  loadingContainer: {
    color: "black",
  },
});

export default MeditationStats;