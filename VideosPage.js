import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
// import VideoPlayer from "react-native-video";
import { Get_Videos_Query } from "./queries";
import Video from "./Video";
import { useQuery } from "@apollo/client";
import client from "./apollo";

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
    console.log(videos, "Tits")
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {videos.map((video) => (
          <Video key={video.id} event={video} />
        ))}
      </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: "#f6f2ed",
  },
    
})



export default VideosPage