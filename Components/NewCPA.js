import React, { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableHighlight,FlatList,StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';

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
      <Text style={{fontSize:20,fontWeight:'bold'}}>
        Weekly Plan
      </Text>

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


      <View style={{height:20}}>

      </View>

      <Text style={{fontSize:20,fontWeight:'bold'}}>
        Budge Plan
      </Text>
    </View>
  );

};


const MondayListScreen = ({navigation}) => {

  const [thingToDO,setthingToDO] = useState("");

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
const TuesdayListScreen = ({navigation}) => {
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
      <View>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    );
  };

  return(
    <View>
    </View>
  )


}
const WednesdayListScreen = ({navigation}) => {
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
      <View>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    );
  };

  return(
    <View>
    </View>
  )


}
const ThursdayListScreen = ({navigation}) => {
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
      <View>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    );
  };

  return(
    <View>
    </View>
  )


}
const FridayListScreen = ({navigation}) => {
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
      <View>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    );
  };

  return(
    <View>
    </View>
  )


}
const SaturdayListScreen = ({navigation}) => {
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
      <View>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    );
  };

  return(
    <View>
    </View>
  )


}
const SundayListScreen = ({navigation}) => {
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
      <View>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    );
  };

  return(
    <View>
    </View>
  )


}

const styles = StyleSheet.create({
  home:{flexDirection:'column',margin:10,},

  homeButton:{borderRadius:50,borderWidth:1,flexDirection:'row',justifyContent:'center',margin:5,
              backgroundColor:'lightblue'},

  homeButtonText:{color:'blue',alignItems:'center',padding:8,fontWeight: "bold"},
})


export default Stack1;
