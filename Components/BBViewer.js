
import {TouchableHighlight,FlatList,SafeAreaView, Button, StyleSheet, Text, TextInput, View } from "react-native";
import Axios from 'axios';
import React, { useState, useEffect } from "react";

const Quiz5 = ()=>{



  const [names,setNames] = useState([]);
  const [posts,setPosts] = useState([]);
  const [selection,setSelection] = useState(null);

  const getNames = async () => {
    let result= {data:[]}
    result = await Axios.get('https://glacial-hamlet-05511.herokuapp.com/bboardNames')
    setNames(result.data)
    return result.data
  }

  const getPosts = async (item) => {
    console.log("item is ")
    let x=null
    let y=null
    if(item!=null){
      x=JSON.stringify(item)
      y=x.replace('{','').replace('}','').split(':').pop().replace('"','').replace('"','')
      console.log(y)
      console.log(typeof y)
      console.log(y=='bb1')
      console.log("item is")
      console.log(item['item'])
    }

    let result= {data:[]}
    if(y==null){
      result = await Axios.post('https://glacial-hamlet-05511.herokuapp.com/posts',{bboard:x})
    }
    if(y!=null){
      result = await Axios.post('https://glacial-hamlet-05511.herokuapp.com/posts',{bboard:item['item']})
    }

    setPosts(result.data)
    console.log("datas are ")
    console.log(result.data)
    setSelection(JSON.stringify(item))
    return result.data
  }



  const renderItem1 = ({ item }) => (
    <TouchableHighlight style={{padding:5}} onPress={()=>{getPosts({item})}}>

      <View style={{alignItems: "center",backgroundColor: "black",padding: 10}}>
        <Text style={{color:'red'}}>{item}</Text>
      </View>

    </TouchableHighlight>




  );

  useEffect(() => {

    const n= getNames()
  },[])

  useEffect(() => {

    const m=getPosts()
  },[])


const renderItem = ({ item }) => (
  <View>
    <View style={{alignItems: "center",backgroundColor: "grey"}}>

      <Text style={{fontSize:20}}>{item.title}</Text>

      <Text >{item.text}</Text>
    </View>
    <View style={{height:40}}>
    </View>
  </View>
);

  return(
    <View style={{flexDirection:'column'}}>

      <View style={{backgroundColor:'black'}}>
        <Text style={{fontSize:30,color:'red',textAlign:'center'}}>
          BBViewer
        </Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <Button
          title={"REFRESH BBOARDS"}
          color="blue"

          onPress = {()=>{getNames()}}/>
          <FlatList
            horizontal={true}
            data={names}
            renderItem={renderItem1}
            keyExtractor={item => item}
          />
      </View>

      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:35}}>
          Selected bboard:
          <View style={{backgroundColor:'black'}}>
            {selection==null?<></>:<Text style={{color:'red'}}> {selection.replace('{','').replace('}','').split(':').pop().replace('"','').replace('"','')} </Text>}
          </View>
        </Text>



      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />




    </View>
  )

}
export default Quiz5;
