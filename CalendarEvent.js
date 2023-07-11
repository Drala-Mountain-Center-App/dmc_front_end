import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking } from "react-native";
import { Image } from "expo-image";
const CalendarEvent = ({ event }) => {
  const handleEventPress = () => {
    Linking.openURL(event.program_url)
  }

  return (
      <TouchableOpacity style={styles.box} onPress={() => handleEventPress()}>
        <View style={styles.container}>
          {/* <Text>{event.id}</Text> */}
          <Image source={event.program_image} style={styles.image} />          
          <Text>{event.program_name}</Text>
          <Text>Dates: {(event.program_start_date).split(" ")[0]} - {(event.program_end_date).split(" ")[0]}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
    width: 325,
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default CalendarEvent;