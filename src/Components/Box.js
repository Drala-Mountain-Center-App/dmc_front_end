import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const iconSize = windowWidth > 400 ? 100 : 80;  


const Box = ({ iconName, text, onPress, image, imageStyle }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      style={[styles.box, isPressed ? styles.boxPressed : null]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={iconSize} color="#ffffff" />
      <View style={styles.boxTextContainer}>
        <Text style={styles.boxText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    flexGrow: 1,
    width: windowWidth / 4,
    height: windowHeight / 6,
    backgroundColor: "#383240",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    margin: 10,
    marginHorizontal: 10,
    marginVertical: 10, 
    borderColor: "#383249",
    opacity: 1,
    borderWidth: 2,
    shadowColor: "#888888",
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 4,
  },

  boxPressed: {
    backgroundColor: '#383250',
    shadowColor: '#fffff4',  
    shadowOpacity: .04,  
    shadowRadius: 6,  
    shadowOpacity: 0.8,
  },
  
  boxTextContainer: {
    justifyContent: 'flex-end',
  },

  boxText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
    textAlign: "center",
    
  },
});

export default Box;