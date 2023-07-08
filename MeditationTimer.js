import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const MeditationTimer = () => {
  return (
    <ImageBackground
      source={require("./assets/home-temple.jpeg")} // Replace with your image source
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* <Text>Meditation Timer</Text> */}
        {/* Add your content here */}
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
  },
});

export default MeditationTimer;
