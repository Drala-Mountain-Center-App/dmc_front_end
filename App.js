
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from './Header';
import HomePage from './HomePage'
import MeditationTimer from './MeditationTimer';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home Page" component={HomePage} />
          <Stack.Screen name="20 Min Meditation Timer" component={MeditationTimer} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#EAE2FA",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE2FA",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});