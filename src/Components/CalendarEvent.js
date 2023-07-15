import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Image } from "expo-image";

const CalendarEvent = ({ event }) => {
  const handleEventPress = () => {
    Linking.openURL(event.url);
  };

  const formatDateString = (dateString) => {
    const parts = dateString.split(" ")[0].split("-");
    const [year, month, date] = parts;
    return `${month} / ${date} / ${year}`;
  };

  return (
    <TouchableOpacity testID="programEvent" style={styles.box} onPress={() => handleEventPress()}>
      <View style={styles.container}>
        <Image source={event.image} style={styles.image} />
        <Text style={styles.name}>{event.name}</Text>
        <Text style={styles.date}>
          Dates: {formatDateString(event.startDate)} -{" "}
          {formatDateString(event.endDate)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
  name: {
    fontWeight: "bold",
    fontSize:16,
    color: "#3d314d",
    margin:10,
  },
  date: {
    color: "#3c304a",
    fontSize: 12,
    fontStyle: "italic",
  },
});

export default CalendarEvent;
