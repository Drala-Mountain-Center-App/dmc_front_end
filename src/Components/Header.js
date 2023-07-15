import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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
        <Ionicons name="person" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    backgroundColor: "#655972",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:"row",
    height: 60,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Header;