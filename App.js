import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from './Header';
import HomePage from './HomePage'
import MeditationTimer from './MeditationTimer';
import UserLogin from './UserLogin';

const Stack = createStackNavigator()
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="UserLogin" component={UserLogin} />
      {/* Add other authentication screens here */}
    </AuthStack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* <Header /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Page"
            component={HomePage}
            options={{
              header: () => <Header />,
            }}
          />
          {/* <Stack.Screen name="Home Page" component={HomePage} /> */}
          <Stack.Screen
            name="20 Min Meditation Timer"
            component={MeditationTimer}
          />
          <Stack.Screen
            name="AuthScreens"
            component={AuthScreens}
            options={{
              headerShown: false,
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
  container: {
    flex: 1,
    backgroundColor: "#EAE2FA",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});