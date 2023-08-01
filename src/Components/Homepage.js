import React, { useEffect, useState } from 'react';
import { View, Platform, Text, Pressable, TouchableOpacity, StyleSheet, Image, Linking, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import Box from './Box'

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
  }
};

const Homepage = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  
useEffect(() => {
  let isMounted = true; 
  const fetchUserInfo = async () => {
    const data = await getData();
    if (isMounted) setUserInfo(data); 
  };

  fetchUserInfo();
  return () => {
    isMounted = false;
  }; // clean up
}, []);


  const handleBoxPress = (boxNumber) => {
    switch (boxNumber) {
      case 1:
        navigation.navigate("20 Min Meditation Timer");
        break;
      case 2:
        navigation.navigate("Programs");
        break;
      case 3:
        navigation.navigate("Videos");
        break;
      case 4:
        navigation.navigate("Gallery");
        break;
      case 5:
        Linking.openURL("https://www.dralamountain.org/dmc-donate/");
      default:
        break;
      case 6:
        navigation.navigate("Meditation Stats");
        break;
      case 7:
        navigation.navigate("Login");
        break;
    }
  };

    navigation.setOptions({
      headerTintColor: "#3c304a"
    });

     const handleLoginButtonPress = () => {
       if (userInfo) {
         AsyncStorage.removeItem("userInfo");
         setUserInfo(null);
       } else {
         navigation.navigate("Login");
       }
     };
  
  return (
    <ImageBackground
      source={require("../../assets/home-hero-scaled-1.jpg")} 
      style={styles.backgroundImage}
    >
    <View style={styles.screen}>
        <View style={styles.gridContainer}>
          <Box 
            iconName="timer-outline" 
            text="Meditation Timer"
            testID="timer-home"
            style={styles.box}
            onPress={() => handleBoxPress(1)}
          />
          <Box 
            iconName="calendar-outline" 
            text="Program Calendar"
            testID="programs"
            style={styles.box}
            onPress={() => handleBoxPress(2)}
          />
          <Box 
            iconName="videocam-outline" 
            text="Teaching Videos"
            testID="videos-home"
            style={styles.box}
            onPress={() => handleBoxPress(3)}
          />
          <Box 
            iconName="images-outline" 
            text="Photo Gallery"
            testID="gallery-home"
            style={styles.box}
            onPress={() => handleBoxPress(4)}
          />
          <Box 
            iconName="heart-circle-outline"
            text="Donate to DMC"
            testID="donate-home" 
            style={styles.box}
            onPress={() => handleBoxPress(5)}
          />
          <Box 
            iconName="stats-chart-outline" 
            text="Meditation Stats"
            testID="stats-home"
            style={styles.box}
            onPress={() => handleBoxPress(6)}
          />
        </View>
    </View>
    
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 2,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: 0,
    marginTop: Platform.OS === "web" ? "8%" : "25%",
    marginBottom: Platform.OS === "web" ? "8%" : "25%",
    marginLeft: Platform.OS === "web" ? "7%" : 0,
    marginRight: Platform.OS === "web" ? "7%" : 0,
    padding: Platform.OS === "web" ? 0 : 0,
    width: "90%",
    alignSelf: "center",
  },

  welcomeHeader: {
    padding: 5,
    paddingLeft: 20,
    marginBottom: 20,
    fontSize: 18,
    color: "#383240",
  },
});

export default Homepage;