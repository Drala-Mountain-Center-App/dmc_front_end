import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

const formatDateString = (dateString) => {
  const parts = dateString.split(" ")[0].split("-");
  const [year, month, date] = parts;
  return `${month} / ${date} / ${year}`;
};

const VideoSingle = ({ event }) => {
  const handleThumbnailPress = () => {
    Linking.openURL(event.videoUrl);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleThumbnailPress}>
        <Image source={{ uri: event.thumbnailUrl }} style={styles.thumbnail} />
      </TouchableOpacity>
      <View style={styles.infoContainer} testID="info-container">
        <Text style={styles.title} testID="event-title">
          {event.title}
        </Text>
        <Text style={styles.speaker} testID="event-speaker">
          {event.speaker}
        </Text>
        <Text style={styles.topic} testID="event-topic">
          {event.topic}
        </Text>
        <Text style={styles.dateRecorded} testID="event-date-recorded">
          Date Recorded: {formatDateString(event.dateRecorded)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  thumbnail: {
    height: 200,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 10,
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

export default VideoSingle;
