import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import HomePage from './HomePage';
import MeditationTimer from './MeditationTimer';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="MeditationTimer" component={MeditationTimer} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#EAE2FA",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE2FA",
    alignItems: "center",
    justifyContent: "space between",
    width: "100%",
  },
});
