import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Get_Videos_Query } from "../queries";
import VideoSingle from "./VideoSingle";
import { useQuery } from "@apollo/client";
import client from "../apollo";

const VideosPage = () => {
  const { loading, error, data } = useQuery(Get_Videos_Query, { client });

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

  const videos = data.allVideos;

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(video) => video.title}
        renderItem={({ item }) => <VideoSingle event={item} />}
        contentContainerStyle={styles.videoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f2ed",
  },
  videoList: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
});

export default VideosPage;
