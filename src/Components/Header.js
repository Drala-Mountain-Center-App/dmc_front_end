import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
   const navigation = useNavigation();
   const handleUserIconPress = () => {
     navigation.navigate("Login");
   };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText} testID="drala">
        Drala Mountain Center
      </Text>
      <TouchableOpacity onPress={handleUserIconPress}>
        <Ionicons name="person" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#645A73",
    backgroundColor: "#383240",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:"row",
    height: 60,
    width: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Header;