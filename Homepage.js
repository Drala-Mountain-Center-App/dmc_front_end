import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  const handleBoxPress = (boxNumber) => {
    switch (boxNumber) {
      case 1:
        navigation.navigate("20 Min Meditation Timer");
        break;
      case 2:
        navigation.navigate("Programs");
        break;
      case 3:
        navigation.navigate("Videos");
        break;
      case 5:
        Linking.openURL("https://www.dralamountain.org/dmc-donate/");
      default:
        break;
      case 6:
        navigation.navigate("Meditation Stats");
        break;
      case 7:
        navigation.navigate("Login");
        break;
    }
  };

    navigation.setOptions({
      headerTintColor: "#3c304a"
    });


  return (
    <ImageBackground
      source={require("./assets/home-hero-scaled-1.jpg")} 
      style={styles.backgroundImage}
    >
    <View style={styles.screen}>
      <View style={styles.gridContainer}>
        <TouchableOpacity testID="timer-home" style={styles.box} onPress={() => handleBoxPress(1)}>
          <Image source={require("./assets/timer.png")} />
          <Text style={styles.boxText}>Meditation Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity testID="programs" style={styles.box} onPress={() => handleBoxPress(2)}>
          <Image source={require("./assets/calendar.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Programs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity testID="videos-home"style={styles.box} onPress={() => handleBoxPress(3)}>
          <Image source={require("./assets/videos.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity testID="gallery-home"style={styles.box} onPress={() => handleBoxPress(4)}>
          <Image source={require("./assets/register.png")} style={styles.registerImage} />
          <Text style={styles.boxText}>Gallery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity testID="donate-home" style={styles.box} onPress={() => handleBoxPress(5)}>
          <Image source={require("./assets/donate.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Donate</Text>
        </TouchableOpacity>

        <TouchableOpacity testID="stats-home" style={styles.box} onPress={() => handleBoxPress(6)}>
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
    width: 130,
    height: 130,
    backgroundColor: "#FCBB2E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    borderColor: "#da990c",
    opacity: 0.9,
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
    height: 100,
    width: 100,
  },
  meditationImage: {
    height: 100,
    width: 100,
    padding: 6,
    justifyContent: "space-between",
  },
  registerImage: {
    tintColor: "white",
    height: 90,
    width: 90,
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