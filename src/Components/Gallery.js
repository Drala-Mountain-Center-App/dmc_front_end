import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gallery = () => {


 return (
    <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <Text>Photo Gallery</Text> 
        <Image
          style={{ width: 200, height: 200, marginBottom: 15 }}
          source={require('./assets/Drala-photos/PXL_20201007_173427746.MP.jpg')}
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