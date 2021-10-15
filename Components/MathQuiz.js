import React, { useState, useEffect }  from 'react';
import { View, Button,
         FlatList, StyleSheet,
         Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MathQuiz = ({n}) => {

  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  const [correct,setCorrect] = useState(0)
  const [answered,setAnswered]= useState(0)
  const [result,setResult]= useState("waiting")
  const [solution,setSolution]= useState(0)


  useEffect(() => {getData()}
           ,[])

   const getData = async () => {
         try {
           // the '@profile_info' can be any string
           const jsonValue = await AsyncStorage.getItem('@info')
           let data = null
           if (jsonValue!=null) {
             data = JSON.parse(jsonValue)
             setInfo(data)
             setName(data.name)
             setEmail(data.email)

           } else {

             setInfo({})
             setName("")
             setEmail("")
           }


         } catch(e) {
           console.log("error in getData ")
           console.dir(e)
           // error reading value
         }
   }






  return(
    <View>
      <Text style={styles.headerText}>
        Math Quiz for numbers between 0 and {n}
      </Text>
      <Text style={styles.middleText}>
        Calculate the product of the following two numbers:
      </Text>
      <Text style={styles.numberText}>
        {a} * {b}=
        <TextInput // for the goal
          style={{fontSize:55}}
          placeholder="???"
          onChangeText={text => {
               setSolution(text);
             }}
        />
      </Text>
      <Butt

    </View>
  )

}

const styles = StyleSheet.create({

  headerText: {

    fontSize: 45,
    color: 'blue'
  },
  middleText: {
    fontSize: 30,
  },
  numberText: {
    fontSize: 55,
  },

});

export default MathQuiz;
