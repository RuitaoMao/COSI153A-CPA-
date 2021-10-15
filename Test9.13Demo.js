import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1,
        flexDirection:'column',}} >
          <View style={{ flex: 1, backgroundColor: "red"}} />

      </View>
      <View style={{ flex: 2, flexDirection:'column',}} >
      <View style={{ flex: 1, backgroundColor: "green"}} />
          <View style={{ flex: 1, backgroundColor: "blue"}} />
          <View style={{ flex: 1, backgroundColor: "yellow"}} />
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'row',
  },

});
