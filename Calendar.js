import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import CalendarEvent from "./CalendarEvent";
import events from "./event-examples";
import client from "./apollo";
import { Get_Program_Query } from "./queries";
import { useQuery } from "@apollo/client";

const Calendar = () => {
  const { loading, error, data } = useQuery(Get_Program_Query, { client });
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  const events = data.allPrograms


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {events.map((event) => (
        <CalendarEvent key={event.id} event={event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: "#f5f2ec",
    color: "#3c304a",
  },
});

export default Calendar;


