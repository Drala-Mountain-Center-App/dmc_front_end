import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  const handleBoxPress = (boxNumber) => {
    console.log(`Box ${boxNumber} pressed`);
    switch (boxNumber) {
      case 1:
        navigation.navigate("Meditation Timer");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(1)}>
          <Image source={require("./assets/timer.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Meditation Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(2)}>
          <Text style={styles.boxText}>Calendar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(3)}>
          <Text style={styles.boxText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(4)}>
          <Text style={styles.boxText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(5)}>
          <Text style={styles.boxText}>Donate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(6)}>
          <Text style={styles.boxText}>Meditation Stats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 5,
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#EAE2FA",
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    padding: 35,
    width: "100%",
    backgroundColor: "#EAE2FA",
  },
  box: {
    width: 140,
    height: 140,
    backgroundColor: "#FCBB2E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});

export default HomePage;