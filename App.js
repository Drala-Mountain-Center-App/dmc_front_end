import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";
import React, {useState} from 'react';
import Header from './src/Components/Header'
import Homepage from './src/Components/Homepage';
import MeditationTimer from './src/Components/MeditationTimer';
import Calendar from './src/Components/Calendar';
import client from './src/apollo';
import { Get_Program_Query } from './src/queries';
import VideosPage from './src/Components/VideosPage.js'
import Gallery from './src/Components/Gallery'
import Login from './src/Components/Login';
import MeditationStats from './src/Components/MeditationStats';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('YourAppName', () => App);

const Stack = createStackNavigator();

export default function App() {
  const { loading, error, data } = useQuery(Get_Program_Query, { client });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
if (loading) {
  return (
    <View style={styles.loadingContainer}>
      <Text>Loading...</Text>
    </View>
  );
}

if (error) {
  return (
    <View style={styles.errorContainer}>
      <Text>Error: {error.message}</Text>
    </View>
  );
}

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.screen}>
        <NavigationContainer>
          <Header isLoggedIn={isLoggedIn} />
          <Stack.Navigator>
            <Stack.Screen
              name="Home Page"
              component={Homepage}
              isLoggedIn={isLoggedIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              isLoggedIn={isLoggedIn}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              testID="timer-header-twenty"
              name="Meditation Timer"
              component={MeditationTimer}
            />
            <Stack.Screen name="Programs" component={Calendar} />
            <Stack.Screen name="Videos" component={VideosPage} />
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Meditation Stats" component={MeditationStats} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar testID="status-bar" style="auto" />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F1F1F1",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
