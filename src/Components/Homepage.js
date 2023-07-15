import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Homepage = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getData();
      setUserInfo(data);
    };

    fetchUserInfo();
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
      {userInfo && <Text style={styles.welcomeHeader}>Welcome, {userInfo.firstName}!</Text>}
      <View style={styles.gridContainer}>
        <TouchableOpacity testID="timer-home" style={styles.box} onPress={() => handleBoxPress(1)}>
          <Ionicons name="timer-outline" size={80} color="white" />
          <Text style={styles.boxText}>Meditation Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity testID="programs" style={styles.box} onPress={() => handleBoxPress(2)}>
          <Ionicons name="calendar-outline" size={80} color="white" />
          <Text style={styles.boxText}>Program Calendar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity testID="videos-home"style={styles.box} onPress={() => handleBoxPress(3)}>
          <Ionicons name="videocam-outline" size={80} color="white" />
          <Text style={styles.boxText}>Teaching Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity testID="gallery-home"style={styles.box} onPress={() => handleBoxPress(4)}>
          <Ionicons name="images-outline" size={80} color="white" />
          <Text style={styles.boxText}>Photo  Gallery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity testID="donate-home" style={styles.box} onPress={() => handleBoxPress(5)}>
          <Image source={require("../../assets/donate.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>Donate to DMC</Text>
        </TouchableOpacity>

        <TouchableOpacity testID="stats-home" style={styles.box} onPress={() => handleBoxPress(6)}>
          <Image source={require("../../assets/meditate.png")} style={styles.meditationImage} />
          <Text style={styles.boxText}>Meditation Stats</Text>
        </TouchableOpacity>

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
    justifyContent: "space-evenly",
  },
  gridContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    margin: 1,
    marginBottom: 10,
    padding: 1,
    width: "100%",
  },
  box: {
    flexGrow: 1,
    width: windowWidth / 4,
    height: windowHeight / 6,
    backgroundColor: "#F2AE30",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15, 
    borderColor: "#da990c",
    opacity: 1,
    borderWidth: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 4,
  },
  boxImage: {
    tintColor: "white",
    height: 90,
    width: 90,
  },
  meditationImage: {
    height: 85,
    width: 85,
    padding: 7,
    justifyContent: "space-between",
  },
  registerImage: {
    tintColor: "white",
    height: 90,
    width: 90,
    marginBottom: 10,
    marginTop: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#ffffff",
    textAlign: "center",
  },
  welcomeHeader: {
    margin: 1,
    padding: 5,
    paddingLeft: 20,
   
    
  }
});

export default Homepage;