import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'

const TFC = ({One,Two}) => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var today = new Date();
    var day = today.getDay()
    var x = null;
    if (day==0){
      x='Sunday'
    }else if (day==1) {
      x='Monday'
    }else if (day==2) {
      x="Tuesday"
    }else if (day==3) {
      x='Wednesday'
    }else if (day==4) {
      x='Thursday'
    }else if (day==5) {
      x='Friday'
    }else if (day==6) {
      x='Saturday'
    }
    setCurrentDate(
      month + '/' + date + '/' + year

    );
    setCurrentDay(x);
  }, []);
  return (
    <View style={{flexDirection:'column',justifyContent:'center',}}>
      <View style={{height:10,backgroundColor:One}}>

      </View>
      <View style={{alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          {Two}
        </Text>
      </View>
      <View style={{height:10,backgroundColor:One}}>

      </View>
      <View style={{height:40}}>

      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{}}>
            <Text style={{fontWeight:'bold'}}>
              Current Date
            </Text>
            <Text style={{}}>
              {currentDate}
            </Text>
        </View>
        <View style={{}}>
            <Text style={{fontWeight:'bold'}}>
              Current Day in a Week
            </Text>
            <Text style={{}}>
              {currentDay}
            </Text>
        </View>
        <View style={{height:50}}>
        </View>
      </View>
    </View>
   )

}



export default TFC
