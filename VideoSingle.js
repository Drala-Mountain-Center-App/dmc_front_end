import React from "react";
import WebView from "react-native-webview";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

  const formatDateString = (dateString) => {
    const parts = dateString.split(" ")[0].split("-");
    const [year, month, date] = parts;
    return `${month} / ${date} / ${year}`;
  };

const VideoSingle = ({ event }) => {
  return (
    <>
      <WebView
        style={style}
        // onError={onError}
        allowsFullscreenVideo
        scrollEnabled={false}
        automaticallyAdjustContentInsets
        source={{
          html: event.embedCode,
        }}
        testID="web-view"
      />
      <View style={styles.infoContainer} testID="info-container">
        <Text style={styles.title} testID="event-title">
          {event.title}{" "}
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
    </>
  );
};

const style = {
  height: 200,
  maxWidth: '100%',
};

const styles = StyleSheet.create({
    infoContainercontainer: {
      backgroundColor: "#FFFFFF",
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
