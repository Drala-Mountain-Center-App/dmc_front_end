import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const MeditationStats = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getData();
      setUserInfo(data);
    };

    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {console.log(userInfo)}
      <Text>{userInfo.firstName} Meditation Stats:</Text>
      <Text>Total Meditations:{userInfo.totalMeditations}</Text>
      <Text>Total Time Spent Meditating:{userInfo.totalMeditationTime}</Text>
      <Text>Average Time Spent Meditating:{userInfo.averageMeditationTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    // justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: "#f5f2ec",
    color: "#3c304a",
  },
  loadingContainer: {
    color: "black",
  },
});

export default MeditationStats;
