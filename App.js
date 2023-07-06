import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import HomePage from './Homepage';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE2FA',
    alignItems: 'center',
    justifyContent: 'space between',
    width: '100%',
  },
});
