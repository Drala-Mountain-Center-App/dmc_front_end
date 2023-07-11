import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import CalendarEvent from "./CalendarEvent";
import events from "./event-examples";

const Calendar = () => {
  return (
    <ImageBackground source={require("./assets/home-temple.jpg")} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        {events.map((event) => <CalendarEvent key={event.program_name} event={event} />)}
      </ScrollView>
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
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
});

export default Calendar;



