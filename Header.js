import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text testID="drala" style={styles.headerText}> 
        {/* <Image source={require("./assets/dralaLogoRound.png")} style={styles.image}></Image>  */}
        Drala Mountain Center</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#655972",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    backgroundColor: "#655972",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  // image: {
  //   height: 30,
  //   width: 30,
  // }
});

export default Header;