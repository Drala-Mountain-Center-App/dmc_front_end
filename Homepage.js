import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  const handleBoxPress = (boxNumber) => {
    console.log(`Box ${boxNumber} pressed`);
    switch (boxNumber) {
      case 1:
        navigation.navigate("20 Min Meditation Timer");
        break;
      case 5:
        Linking.openURL("https://www.dralamountain.org/dmc-donate/");
      default:
        break;
      case 7:
        navigation.navigate("Login");
        break;
    }
  };

  return (
    <ImageBackground
      source={require("./assets/home-plan-your-event-background-scaled-1.jpg")} 
      style={styles.backgroundImage}
    >
    <View style={styles.screen}>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress(1)}>
          <Image source={require("./assets/timer.png")} />
          <Text accessibilityLabel="box1" style={styles.boxText}>Meditation Timer</Text>
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
          <Image source={require("./assets/meditate.png")} style={styles.meditationImage} />
          <Text style={styles.boxText}>Meditation Stats</Text>
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
  screen: {
    paddingTop: 5,
    flex: 1,
    justifyContent: "space-evenly",
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    padding: 35,
    width: "100%",
  },
  box: {
    width: 140,
    height: 140,
    backgroundColor: "#FCBB2E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    borderColor: "#da990c",
    borderWidth: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  boxImage: {
    tintColor: "white",
    height: 110,
    width: 110,
  },
  meditationImage: {
    height: 110,
    width: 110,
    padding: 6,
    justifyContent: "space-between",
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

export default Homepage;