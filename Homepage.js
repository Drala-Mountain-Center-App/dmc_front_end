import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  const handleBoxPress = (boxNumber) => {
    console.log(`Box ${boxNumber} pressed`);
    switch (boxNumber) {
      case 1:
        navigation.navigate("Meditation Timer");
        break;
      case 5:
        Linking.openURL("https://www.dralamountain.org/dmc-donate/");
      default:
        break;
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(1)}>
          <Image source={require("./assets/timer.png")} />
          <Text style={styles.boxText}>Meditation Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(2)}>
          <Image source={require("./assets/calendar.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Calendar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(3)}>
          <Image source={require("./assets/videos.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(4)}>
          <Image source={require("./assets/register.png")} style={styles.registerImage} />
          <Text style={styles.boxText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(5)}>
          <Image source={require("./assets/donate.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Donate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(6)}>
          <Image source={require("./assets/meditate.png")} style={styles.boxImage} />
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
  boxImage: {
    tintColor: "white",
    height: 120,
    width: 120,
  },
  meditationImage: {
    backgroundColor: "white",
    height: 120,
    width: 120,
  },
  registerImage: {
    tintColor: "white",
    height: 100,
    width: 100,
    marginBottom: 10,
    marginTop: 5,
  },
  boxText: {
    fontSize: 12,
    fontWeight: "900",
    color: "#ffffff",
    textAlign: "center",
  },
});

export default HomePage;