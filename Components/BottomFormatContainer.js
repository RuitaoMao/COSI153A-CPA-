import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const TFC = ({One,Two,Three}) => {




  return (
    <View style={{flexDirection:'column',justifyContent:'center',top:80}}>
      <View style={{height:10,backgroundColor:One}}>

      </View>
      <View style={{alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          {Two}
        </Text>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          {Three}
        </Text>
      </View>
      <View style={{height:10,backgroundColor:One}}>

      </View>

    </View>
   )
}



export default TFC
