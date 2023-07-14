import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import MeditationTimer from './MeditationTimer';

const client = new ApolloClient({
  uri: "https://drala-mountain-api-4812ef039e59.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const GET_DATA_QUERY = gql`
  query {
    userByEmail(email: "email@email.email") {
      id
      firstName
      lastName
      email
      member
      }
  }
`
const Stack = createStackNavigator();


export default function App() {
   const { loading, error, data } = useQuery(GET_DATA_QUERY, { client });
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
      {console.log(data)}
      <SafeAreaView style={styles.screen}>
        <Header />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home Page" component={Homepage} />
            <Stack.Screen
              testID="timer-header-twenty"
              name="20 Min Meditation Timer"
              component={MeditationTimer}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar  testID="status-bar" style="auto" />
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
// AppRegistry.registerComponent("MyApplication", () => App);