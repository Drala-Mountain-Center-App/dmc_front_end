import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";

const Video = ({ event }) => {
   const formatDateString = (dateString) => {
     const parts = dateString.split(" ")[0].split("-");
     const [year, month, date] = parts;
     return `${month} / ${date} / ${year}`;
   };
  return (
    <View style={styles.container}>
      <ImageBackground source={event.image} style={styles.imageBackground}>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => Linking.openURL(event.videoUrl)}
        >
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.speaker}>{event.speaker}</Text>
        <Text style={styles.topic}>{event.topic}</Text>
        <Text style={styles.dateRecorded}>
          Date Recorded: {formatDateString(event.dateRecorded)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#3d314d",
  },
  playButtonText: {
    color: "white",
    fontSize: 16,
  },
  infoContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3d314d",
  },
  speaker: {
    fontSize: 16,
    marginBottom: 5,
  },
  topic: {
    fontSize: 14,
    marginBottom: 5,
  },
  dateRecorded: {
    fontSize: 12,
    color: "#888",
  },
});

export default Video;
