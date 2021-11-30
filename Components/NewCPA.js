import React, { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableHighlight,FlatList,StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MondayListScreen from './MondayList';
import TuesdayListScreen from './TuesdayList';
import WednesdayListScreen from './WednesdayList';
import ThursdayListScreen from './ThursdayList';
import FridayListScreen from './FridayList';
import SaturdayListScreen from './SaturdayList';
import SundayListScreen from './SundayList';
import TopFormatContainer from './TopFormatContainer';
import BottomFormatContainer from './BottomFormatContainer';

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
        <Stack.Screen name="Tuesday List" component={TuesdayListScreen} />
        <Stack.Screen name="Wednesday List" component={WednesdayListScreen} />
        <Stack.Screen name="Thursday List" component={ThursdayListScreen} />
        <Stack.Screen name="Friday List" component={FridayListScreen} />
        <Stack.Screen name="Saturday List" component={SaturdayListScreen} />
        <Stack.Screen name="Sunday List" component={SundayListScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation ,route}) => {

  return (
    <View style={styles.home}>

      <TopFormatContainer One='navy' Two='Weekly Plan'/>


      <TouchableHighlight style={styles.homeButton} onPress={()=> navigation.navigate('Monday List')}>

        <View>
          <Text style={styles.homeButtonText}>Monday-TODO-List</Text>
        </View>

      </TouchableHighlight>

      <TouchableHighlight style={styles.homeButton} onPress={()=> navigation.navigate('Tuesday List')}>

        <View>
          <Text style={styles.homeButtonText}>Tuesday-TODO-List</Text>
        </View>

      </TouchableHighlight>

      <TouchableHighlight style={styles.homeButton} onPress={()=> navigation.navigate('Wednesday List')}>

        <View>
          <Text style={styles.homeButtonText}>Wednesday-TODO-List</Text>
        </View>

      </TouchableHighlight>

      <TouchableHighlight style={styles.homeButton} onPress={()=> navigation.navigate('Thursday List')}>

        <View>
          <Text style={styles.homeButtonText}>Thursday-TODO-List</Text>
        </View>

      </TouchableHighlight>

      <TouchableHighlight style={styles.homeButton} onPress={()=> navigation.navigate('Friday List')}>

        <View>
          <Text style={styles.homeButtonText}>Friday-TODO-List</Text>
        </View>

      </TouchableHighlight>

      <TouchableHighlight style={styles.homeButton} onPress={()=> navigation.navigate('Saturday List')}>

        <View>
          <Text style={styles.homeButtonText}>Saturday-TODO-List</Text>
        </View>

      </TouchableHighlight>

      <TouchableHighlight style={styles.homeButton} onPress={()=> navigation.navigate('Sunday List')}>

        <View>
          <Text style={styles.homeButtonText}>Sunday-TODO-List</Text>
        </View>

      </TouchableHighlight>


      <View style={{}}>

        <Image
        style={{width: 400, height: 200,top:50,borderRadius:20}}
        source={{
          uri: 'https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000',
        }}
        />
      </View>
      <BottomFormatContainer One='navy' Two='Schedule Ahead' Three='Start Early'/>


    </View>
  );

};


const styles = StyleSheet.create({
  home:{flexDirection:'column',margin:10,},

  homeButton:{borderRadius:50,borderWidth:1,flexDirection:'row',justifyContent:'center',margin:5,
              backgroundColor:'lightblue'},

  homeButtonText:{color:'blue',alignItems:'center',padding:8,fontWeight: "bold"},
})


export default Stack1;
