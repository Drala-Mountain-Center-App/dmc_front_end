import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import MeditationTimer from './MeditationTimer';
import Calendar from './Calendar';
import { Get_Program_Query } from './queries';
import client from './apollo';
import VideosPage from './VideosPage.js'
import Login from './Login';

const Stack = createStackNavigator();

export default function App() {
   const { loading, error, data } = useQuery(Get_Program_Query, { client });
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
        <Header />
          <Stack.Navigator>
            <Stack.Screen
              name="Home Page"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              testID="timer-header-twenty"
              name="20 Min Meditation Timer"
              component={MeditationTimer}
            />
            <Stack.Screen name="Programs" component={Calendar} />
            <Stack.Screen name="Videos" component={VideosPage} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar testID="status-bar" style="auto" />
      </SafeAreaView>
    </ApolloProvider>
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
