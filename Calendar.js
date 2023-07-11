import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import CalendarEvent from "./CalendarEvent";
import events from "./event-examples";

const Calendar = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {events.map((event) => <CalendarEvent key={event.program_name} event={event} />)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: "#f6f2ed"
  },
});

export default Calendar;



