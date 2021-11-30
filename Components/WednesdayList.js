import React, { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableHighlight,FlatList,StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const WednesdayListScreen = ({navigation}) => {

  const [thingToDO,setthingToDO] = useState("");

  const [toDoLists,settoDoLists]= useState([]);


  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
       try {

         const jsonValue = await AsyncStorage.getItem('@WednesdayToDoLists')
         let data = null
         if (jsonValue!=null) {
           data = JSON.parse(jsonValue)
           settoDoLists(data)

         } else {


           settoDoLists([])

           setthingToDO("")

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
          await AsyncStorage.setItem('@WednesdayToDoLists', jsonValue)
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
      <View style={{flexDirection:'column',alignItems: "center", borderWidth:2, margin:10,}}>

           <Text style={{fontSize:29}}>{item.thingToDO} </Text>
           <View style={{flexDirection:'row'}}>
            <Text>Saved on {new Date().getMonth() + 1}.{new Date().getDate()} </Text>
           </View>
      </View>
    );
  };

  return(
    <View>
      <View style={{height:40}}>
      </View>
      <TextInput style={{fontSize:20,}} placeholder="Type in new things-to-do here" onChangeText={text => {setthingToDO(text)}}
      value ={thingToDO}/>

      <View style={{flexDirection:'row', justifyContent:'space-around'}}>


        <TouchableHighlight  onPress={() => { const newlist = toDoLists.concat({'thingToDO':thingToDO})
          settoDoLists(newlist), storeData(newlist), setthingToDO("")}}>

          <View style={{borderRadius:20,backgroundColor:'lightgreen'}}>
            <Text style={{fontSize:40,color:'blue'}}>Press To Save</Text>
          </View>

        </TouchableHighlight>



      </View>

      <FlatList
        data={toDoLists.reverse()}
        renderItem={renderToDoList}
        keyExtractor={item => item.dueDate}
      />
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Button title="Clear All" color="red"
          onPress = {() => { clearAll(), settoDoLists([])
                           }}
        />
      </View>

    </View>
  )
}


export default WednesdayListScreen;
