import React, { useState, useEffect }  from 'react';


import { FlatList,StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';


const ExpandableText = ({ title, text }) => {
  const [hide,sethide] = useState(true)

  return(
    <View style={{ flexDirection: 'row',
                   }}>
    <Button
        title={title}
        color="blue"
        onPress={()=> {
          sethide(!hide)
        }}
    />
    {hide?<></>:<Text> {text} </Text>}
    
    </View>

  )
}
const App = () => {






      return (
  <View>
    <Text style={{fontSize:20}}>ExpandableText Demo</Text>
    <ExpandableText title="A" text="This is the 1st letter of the alphabet"/>
    <ExpandableText title="M" text="This is the middle letter"/>
    <ExpandableText title="Z" text="This is the last letter of the alphabet"/>
  </View>
      );
    }
export default App;
