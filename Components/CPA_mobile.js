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

        <Stack.Screen name="Emergence List" component={EmergenceListScreen} />
        <Stack.Screen name="Work List" component={WorkListScreen} />
        <Stack.Screen name="Life List" component={LifeListScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (

<View style={styles.top}>

      <View style={styles.homescreenHead1}>

        <Button
          title="Go to emergence list"
          onPress={() =>
            navigation.navigate('Emergence List')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />




        </View>
        <View style={styles.alert}>
          <Text style={{fontSize:40,color:"red"}}>
            Put your tasks into seperate lists and try to finish them ASAP!
          </Text>
        </View>

        <View style={styles.homescreenHead2}>

          <Button
            title="Go to work list"
            onPress={() =>
              navigation.navigate('Work List')
                 // we're passing a parameter name:'Jane' to the Profile component!
            }
          />
          <Button
            title="Go to life list"
            onPress={() =>
              navigation.navigate('Life List')
                 // we're passing a parameter name:'Jane' to the Profile component!
            }
          />


          </View>
</View>

  );
};

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}

const EmergenceListScreen = ({ navigation, route }) => {
  const [dueDate,setdueDate] = useState("")
  const [thingToDO,setthingToDO] = useState("")
  const [subject,setsubject] = useState("")
  const [toDoLists,settoDoLists]= useState([])

  // this loads in the data after the app has been rendered
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


  // Each Pomorodo in the FlatList will be rendered as follows:
  const renderToDoList = ({item}) => {
    return (
      <View style={styles.listT}>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    )
  }


  return (


    <View style={{flex:5}}>
    <View style={styles.emergenceTitle}>
      <Text style={styles.emergenceTitleText}>
      This is the Emergence list
      </Text>
      </View>
      <View style={styles.emergenceBody}>


      <View style={{flex:1,backgroundColor:'white'}}>



        <View style={{flexDirection:'row',
                      margin:20,
                      justifyContent:'space-around'}}>
              <TextInput // for the date/time
                style={{fontSize:10}}
                placeholder="Due date"
                onChangeText={text => {
                     setdueDate(text);
                   }}
                value = {dueDate}
              />

              <TextInput // for the goal
                style={{fontSize:12}}
                placeholder="Thing to do"
                onChangeText={text => {
                     setthingToDO(text);
                   }}
                value = {thingToDO}
              />

              <TextInput // for the result
                style={{fontSize:12}}
                placeholder="subject"
                onChangeText={text => {
                     setsubject(text);
                   }}
                value = {subject}
              />
          </View>
          <View style={{flexDirection:'row',
                        justifyContent:'space-around'}}>
          <Button
                 title={"Record"}
                 color="green"
                 onPress = {() => {
                   const newlist =
                     toDoLists.concat(
                       {'dueDate':dueDate,
                        'thingToDO':thingToDO,
                        'subject':subject,

                     })
                   settoDoLists(newlist)
                   storeData(newlist)
                   setdueDate("")
                   setthingToDO("")
                   setsubject("")
                 }}
                 />
          <Button
                  title={"Clear"}
                  color="pink"
                  onPress = {() => {
                    clearAll()
                    settoDoLists([])
                  }}
                  />

        </View>
        <View style={{flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'brown'}}>
          <Text style={{fontSize:20, color:'red',backgroundColor:'black'}}>
                Things to do
           </Text>
        </View>

        <FlatList
          data={toDoLists.reverse()}
          renderItem={renderToDoList}
          keyExtractor={item => item.dueDate}
        />





      </View>
      <View style={{flex:1,backgroundColor:'lightyellow'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri:'http://www.forwardirections.org/wp-content/uploads/2017/06/warning-deadlines.jpg'}}/>
      </View>


      </View>


    </View>


  );

};

const WorkListScreen = ({ navigation, route }) => {
  const [dueDate,setdueDate] = useState("")
  const [thingToDO,setthingToDO] = useState("")
  const [subject,setsubject] = useState("")
  const [toDoLists,settoDoLists]= useState([])

  // this loads in the data after the app has been rendered
  useEffect(() => {getData()}
           ,[])



  const getData = async () => {
        try {

          const jsonValue = await AsyncStorage.getItem('@wtoDoLists')
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
          await AsyncStorage.setItem('@wtoDoLists', jsonValue)
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


  // Each Pomorodo in the FlatList will be rendered as follows:
  const renderToDoList = ({item}) => {
    return (
      <View style={styles.listT}>
           <Text>{item.dueDate}</Text>
           <Text>{item.thingToDO} </Text>
           <Text>{item.subject} </Text>
      </View>
    )
  }


  return (


    <View style={{flex:5}}>
    <View style={styles.workTitle}>
      <Text style={styles.workTitleText}>
      This is the work list
      </Text>
      </View>
      <View style={styles.workBody}>


      <View style={{flex:1,backgroundColor:'white'}}>



        <View style={{flexDirection:'row',
                      margin:20,
                      justifyContent:'space-around'}}>
              <TextInput // for the date/time
                style={{fontSize:10}}
                placeholder="Due date"
                onChangeText={text => {
                     setdueDate(text);
                   }}
                value = {dueDate}
              />

              <TextInput // for the goal
                style={{fontSize:12}}
                placeholder="Thing to do"
                onChangeText={text => {
                     setthingToDO(text);
                   }}
                value = {thingToDO}
              />

              <TextInput // for the result
                style={{fontSize:12}}
                placeholder="subject"
                onChangeText={text => {
                     setsubject(text);
                   }}
                value = {subject}
              />
          </View>
          <View style={{flexDirection:'row',
                        justifyContent:'space-around'}}>
          <Button
                 title={"Record"}
                 color="green"
                 onPress = {() => {
                   const newlist =
                     toDoLists.concat(
                       {'dueDate':dueDate,
                        'thingToDO':thingToDO,
                        'subject':subject,

                     })
                   settoDoLists(newlist)
                   storeData(newlist)
                   setdueDate("")
                   setthingToDO("")
                   setsubject("")
                 }}
                 />
          <Button
                  title={"Clear"}
                  color="pink"
                  onPress = {() => {
                    clearAll()
                    settoDoLists([])
                  }}
                  />

        </View>
        <View style={{flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'brown'}}>
          <Text style={{fontSize:20, color:'red',backgroundColor:'black'}}>
                Things to do
           </Text>
        </View>

        <FlatList
          data={toDoLists.reverse()}
          renderItem={renderToDoList}
          keyExtractor={item => item.dueDate}
        />





      </View>
      <View style={{flex:1,backgroundColor:'lightyellow'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri:'https://media.canadianunderwriter.ca/uploads/2020/06/burnout-work-from-home.jpg'}}/>
      </View>


      </View>


    </View>


  );
};

const LifeListScreen = ({ navigation, route }) => {

  const [thingToDO,setthingToDO] = useState("")

  const [toDoLists,settoDoLists]= useState([])

  // this loads in the data after the app has been rendered
  useEffect(() => {getData()}
           ,[])



  const getData = async () => {
        try {

          const jsonValue = await AsyncStorage.getItem('@ltoDoLists')
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
          await AsyncStorage.setItem('@ltoDoLists', jsonValue)
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


  // Each Pomorodo in the FlatList will be rendered as follows:
  const renderToDoList = ({item}) => {
    return (
      <View style={styles.listT}>

           <Text>{item.thingToDO} </Text>

      </View>
    )
  }


  return (


    <View style={{flex:5}}>
    <View style={styles.lifeTitle}>
      <Text style={styles.lifeTitleText}>
      This is the life list
      </Text>
      </View>
      <View style={styles.lifeBody}>


      <View style={{flex:1,backgroundColor:'white'}}>



        <View style={{flexDirection:'row',
                      margin:20,
                      justifyContent:'space-around'}}>


              <TextInput // for the goal
                style={{fontSize:12}}
                placeholder="Thing to do"
                onChangeText={text => {
                     setthingToDO(text);
                   }}
                value = {thingToDO}
              />


          </View>
          <View style={{flexDirection:'row',
                        justifyContent:'space-around'}}>
          <Button
                 title={"Record"}
                 color="green"
                 onPress = {() => {
                   const newlist =
                     toDoLists.concat(
                       {
                        'thingToDO':thingToDO,


                     })
                   settoDoLists(newlist)
                   storeData(newlist)

                   setthingToDO("")

                 }}
                 />
          <Button
                  title={"Clear"}
                  color="pink"
                  onPress = {() => {
                    clearAll()
                    settoDoLists([])
                  }}
                  />

        </View>
        <View style={{flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'white'}}>
          <Text style={{fontSize:20, color:'green',backgroundColor:'lightyellow'}}>
                Things to do
           </Text>
        </View>

        <FlatList
          data={toDoLists.reverse()}
          renderItem={renderToDoList}
          keyExtractor={item => item.dueDate}
        />





      </View>
      <View style={{flex:1,backgroundColor:'lightyellow'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri:'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-10/purposeoflife.jpg?itok=G_3RzDjy'}}/>
      </View>


      </View>


    </View>


  );

};

const styles = StyleSheet.create({
  homescreenHead2: { flexDirection: 'row',
      flex:6,

                 justifyContent: 'space-around',
                 alignItems:'center',
                 backgroundColor:'lightgreen'
               },
               homescreenHead1: { flexDirection: 'row',
                   flex:6,

                              justifyContent: 'space-around',
                              alignItems:'center',
                              backgroundColor:'red'
                            },
            homebox:{
              flex:1,
              flexDirection:'row',
              backgroundColor:'lightgreen',

            },
            top:{
              flexDirection:'column',

            },
            emergenceTitleText:{
              fontSize:40,
              color:'red',


            },
            emergenceTitle:{
              flex:1,
              backgroundColor:'orange',
              alignItems:'center',


            },
            emergenceBody:{
              flex:4,
              backgroundColor:'yellow',
              // alignItems:'center',
              flexDirection:'row',


            },
            workTitleText:{
              fontSize:40,
              color:'green',


            },
            workTitle:{
              flex:1,
              backgroundColor:'yellow',
              alignItems:'center',


            },
            workBody:{
              flex:4,
              backgroundColor:'yellow',
              // alignItems:'center',
              flexDirection:'row',


            },
            lifeTitleText:{
              fontSize:40,
              color:'black',


            },
            lifeTitle:{
              flex:1,
              backgroundColor:'pink',
              alignItems:'center',


            },
            lifeBody:{
              flex:4,
              backgroundColor:'green',
              // alignItems:'center',
              flexDirection:'row',


            },
            alert:{
              backgroundColor:"black",
              flex:6,

              justifyContent: 'space-around',
              alignItems:'center',

            },
            container: {
              flex: 1,
              flexDirection:'column',
              backgroundColor: '#eee',
              justifyContent: 'center',
              textAlign:'left',
              marginTop:20,
              padding:20,
            },
            listT:{
              flexDirection:'row',
              justifyContent:'space-between',
            },
            headerText: {
              textAlign:'center',
              backgroundColor:'#aaa',
              fontSize: 32,
              padding:10,
              color: 'blue'
            },



});
export default Stack1;
