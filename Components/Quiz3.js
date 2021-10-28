
import React, { useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



const Quiz3 = () => {
  const [radius, setRadius] = useState(0);
  const [height, setHeight] = useState(0);
  const [areaOfBaseI, setAreaOfBaseI] = useState(0);
  const [volumnI,setVolumnI] = useState(0)
  const [volumnG,setVolumnG] = useState(0)
  const [debugging,setDebugging] = useState(false)


  let debugView =(
      <View>
          <Text> radius = {radius} inches</Text>
          <Text> height = {height} inches</Text>
          <Text> area of base = pi*r^2 = {areaOfBaseI} square inches</Text>
          <Text> volume of cylinder = {volumnI} cubic inches</Text>
          <Text> volume of cylinder = {volumnG} gallons</Text>
      </View>
)

  let radiusInput=(
    <TextInput
          placeholder = 'radius'
          onChangeText={text => {setRadius(text)}}
      />
  )

  let heightInput=(
    <TextInput
          placeholder= 'height'
          onChangeText={text => {setHeight(text)}}
      />
  )

  let calculateButton= (

    <View style = {{alignItems:'flex-start'}}>
      <Button
          color="green"
          title="CALCULATE VOLUME"
          onPress={()=> {
            setAreaOfBaseI(radius*radius*3.1415926)
            setVolumnI(height*radius*radius*3.1415926)
            setVolumnG(height*radius*radius*3.1415926/231)
          }}
      />
    </View>

    )

  return (
    <View style={{flexDirection:'column'}}>
      <View style= {styles.header}>
        <Text style = {{fontSize:60,backgroundColor:'lightgreen',}}>Quiz3 </Text>
        <Text style = {{backgroundColor:'lightgreen',}}> CS153a Fall21 </Text>
        <Text style = {{backgroundColor:'lightgreen',}}> Write the code for this App, including this text! </Text>
      </View>
      <Text>
        Enter the radius and the height of a cylinder in inches and we will calculate the volume in gallons.
        A 6 inch radius and 12 inch height will have volume 5.88. Divide cubic inches by 231 to get gallons, and show
        only 2 digits after the decimal point in the volume.
      </Text>
      <View style={styles.coefficients}>
        <Text> radius: </Text>
        {radiusInput}
      </View>
      <View style={styles.coefficients}>
        <Text> height: </Text>
        {heightInput}
      </View>
      {calculateButton}
      <View style={styles.coefficients}>
        <Text> The volume is {(Math.round(volumnG * 100) / 100).toFixed(2)} gallons </Text>
      </View>
      <View style = {{alignItems:'flex-start'}}>
        <Button
            color="blue"
            title="TOGGLE CALCULATIONS VIEW"
            onPress={()=> {
              setDebugging(!debugging)
            }}
        />
      </View>
      {debugging?<View>{debugView}</View>:<></>}
    </View>
  )

    }
  const styles = StyleSheet.create ({
    header:{
      width: '300px',


    },
    coefficients:{
      backgroundColor:'pink',
      flexDirection:'row',
      alignContent:'flex-start',
      width: '300px',
    }

  });

export default Quiz3;
