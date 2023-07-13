import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import MeditationTimer from './MeditationTimer';
import Calendar from './Calendar';
import { Get_Program_Query } from './queries';
const Stack = createStackNavigator();
import client from './apollo';

export default function App() {
   const { loading, error, data } = useQuery(Get_Program_Query, { client });
   console.log(data)
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
      {/* {console.log(data)} */}
      <SafeAreaView style={styles.screen}>
        <Header />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home Page" component={Homepage} />
            <Stack.Screen
              name="20 Min Meditation Timer"
              component={MeditationTimer}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
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
