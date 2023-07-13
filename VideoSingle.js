import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Video, Audio, StatusBar } from "expo-av";

export const VideoSingle = ({ event }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const formatDateString = (dateString) => {
    const parts = dateString.split(" ")[0].split("-");
    const [year, month, date] = parts;
    return `${month} / ${date} / ${year}`;
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{ uri: event.videoUrl }}
        style={styles.video}
        resizeMode="contain"
        useNativeControls
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button
          title="Play"
          onPress={() => video.current.playFromPositionAsync(5000)}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          title="Play from 50s"
          onPress={() => video.current.playFromPositionAsync(50000)}
        />
      </View>
      <StatusBar style="auto" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.speaker}>{event.speaker}</Text>
        <Text style={styles.topic}>{event.topic}</Text>
        <Text style={styles.dateRecorded}>
          Date Recorded: {formatDateString(event.dateRecorded)}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttons: {
    margin: 16,
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
