import React, { useState } from "react";
import {View,StyleSheet,Button,Text,TextInput} from 'react-native';
import {useValue} from './ValueContext'


const NamedCounter = ({value,label}) => {
  const {currentValue, setCurrentValue} = useValue();
  const updateData = () => {
    let vals = currentValue.log
    console.log("vals="+vals)
    setCurrentValue({count:currentValue.count+1,
                     total:currentValue.total+value,
                     log:vals+[value]
                   })
  }
  const [total,setTotal] = useState(0)

  return (
      <TextInput style={{fontSize:20,}} placeholder="Type in new spent" onChangeText={()=>{
           setTotal(total+1)
           updateData()}
      value ={thingToDO}/>

      

  );
}

export default NamedCounter;
