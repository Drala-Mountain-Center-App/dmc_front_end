import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gallery = () => {




 return (
    <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <Text>Photo Gallery</Text> 
        <Image
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require('./assets/image1.JPG')}
        /> 
       
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f2ed",
    height: "100%",
    width: "100%"
  },
  }) 

export default Gallery;