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
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.title}</Text>        
        <Text style={styles.speaker}>{event.speaker}</Text>
        <Text style={styles.topic}>{event.topic}</Text>
        <Text style={styles.dateRecorded}>
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
      backgroundColor: "#fff",
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
