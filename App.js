import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreen from './src/screens/NavigationScreen';
import { Provider } from './src/contex/BlogContext';
// import { BlogProvider } from '../contex/BlogContext';

const App1=()=> {
  return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app,,,,,,,,,,,,it's working !</Text>
      <StatusBar style="auto" />
    </View>*/
    <NavigationScreen></NavigationScreen>
  );
};

const App=App1;

export default () => {
  return(
    <Provider>
  <App />
  </Provider>
  );
};