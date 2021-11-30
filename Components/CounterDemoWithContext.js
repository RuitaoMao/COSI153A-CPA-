import React from "react";
import {View,StyleSheet,Text} from 'react-native';
import NamedCounterC from './NamedCounterWithContext';
import {useValue} from './ValueContext';


const CounterDemoWithContext = () => {
  const {currentValue} = useValue();
  const total = currentValue.total
  const count = currentValue.count

  return (
    <View style={{margin:'2%',marginTop:10,backgroundColor:'green',
            justifyContent:'flex-start',}}>
      <Text style={{fontSize:32}}>
        Counter Demo with Context
      </Text>
      <Text> Total = ${(total/100).toFixed(2)} </Text>
      <Text> Count = {count} </Text>



      <NamedCounterC label="Twenty" value={2000}  />

      <Text>Use a flatlist for this ...
        {JSON.stringify(currentValue.log,null,5)}
      </Text>
    </View>
  );
}

export default CounterDemoWithContext;
