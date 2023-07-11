import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import MeditationTimer from "./MeditationTimer";
import UserLogin from "./UserLogin";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Page"
            component={HomePage}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="20 Min Meditation Timer"
            component={MeditationTimer}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="UserLogin"
            component={UserLogin}
            options={{
              headerShown: true,
            }}
          />
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
});
