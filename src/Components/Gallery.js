import React from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';


const Gallery = () => {

const imagePaths = [
  require("../../assets/Drala-photos/meadow.jpg"), 
  require("../../assets/Drala-photos/stillwater.jpg"), 
  require("../../assets/Drala-photos/snowy.jpg"),
  require("../../assets/Drala-photos/grass.jpg"), 
  require("../../assets/Drala-photos/rainbow.jpg"), 
  require("../../assets/Drala-photos/zen.jpg"),
  require("../../assets/Drala-photos/road-home.jpg"),
  require("../../assets/Drala-photos/stone.jpg"),
  require("../../assets/Drala-photos/storm.jpg"),
  require("../../assets/Drala-photos/sunset1.jpg"),
  require("../../assets/Drala-photos/sunset2.jpg"),
  ]

 return (
    <ScrollView contentContainerStyle={styles.container}>
        {imagePaths.map(image => {
           return (<Image
          key={image} 
          style={ styles.image }
          source={image}
        />) 
        })}   
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f2ed",
    flexGrow: 1, 
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "90%", 
    height: 200, 
    marginBottom: 15
  }
  }) 

export default Gallery;