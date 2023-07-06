import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePage = () => {
  const handleBoxPress = (boxNumber) => {
    console.log(`Box ${boxNumber} pressed`);
    // Add your logic for handling box press event here
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => handleBoxPress(1)}
        >
          <Text style={styles.boxText}>Meditation Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => handleBoxPress(2)}
        >
          <Text style={styles.boxText}>Calendar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => handleBoxPress(3)}
        >
          <Text style={styles.boxText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => handleBoxPress(4)}
        >
          <Text style={styles.boxText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => handleBoxPress(5)}
        >
          <Text style={styles.boxText}>Donate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => handleBoxPress(6)}
        >
          <Text style={styles.boxText}>Meditation Stats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'space-evenly',
    justifyContent: 'space-evenly',
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
    margin: 0,
    width: '70%',
  },
  box: {
    width: 120,
    height: 150,
    backgroundColor: '#FCBB2E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomePage;