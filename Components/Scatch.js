import React, { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FlatList,StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

const Stack1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home Board"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Monday List" component={MondayListScreen} />
        <Stack.Screen name="Tuesday List" component={TuesdayScreen} />
        <Stack.Screen name="Wednesday List" component={WednesdayScreen} />
        <Stack.Screen name="Thursday List" component={ThursdayScreen} />
        <Stack.Screen name="Friday List" component={FridayScreen} />
        <Stack.Screen name="Saturday List" component={SaturdayScreen} />
        <Stack.Screen name="Sunday List" component={SundayScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Button
        title="Monday-TODO-List"
        onPress={() =>
          navigation.navigate('Monday List')}
      />
      <Button
        title="Tuesday-TODO-List"
        onPress={() =>
          navigation.navigate('Tuesday List')}
      />
      <Button
        title="Wednesday-TODO-List"
        onPress={() =>
          navigation.navigate('Wednesday List')}
      />
      <Button
        title="Thursday-TODO-List"
        onPress={() =>
          navigation.navigate('Thursday List')}
      />
      <Button
        title="Friday-TODO-List"
        onPress={() =>
          navigation.navigate('Friday List')}
      />
      <Button
        title="Saturday-TODO-List"
        onPress={() =>
          navigation.navigate('Saturday List')}
      />
      <Button
        title="Sunday-TODO-List"
        onPress={() =>
          navigation.navigate('Sunday List')}
      />
    </View>
  );

};


const MondayListScreen = ({navigation}) => {
  const [dueDate,setdueDate] = useState("");
  const [thingToDO,setthingToDO] = useState("");
  const [subject,setsubject] = useState("");
  const [toDoLists,settoDoLists]= useState([]);


  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
       try {

         const jsonValue = await AsyncStorage.getItem('@etoDoLists')
         let data = null
         if (jsonValue!=null) {
           data = JSON.parse(jsonValue)
           settoDoLists(data)

         } else {


           settoDoLists([])
           setdueDate("")
           setthingToDO("")
           setsubject("")
         }
       } catch(e) {
         console.log("error in getData ")
         // this shouldn't happen, but its good practice
         // to check for errors!
         console.dir(e)
         // error reading value
       }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@etoDoLists', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

  const renderToDoList = ({item}) => {
    return (
      <View style={styles.listT}>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    )
  }




}
