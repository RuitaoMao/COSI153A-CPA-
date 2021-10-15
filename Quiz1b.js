
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

// const App = () => {...}
export default function App() {
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>
          Quiz1
        </Text>
      </View>

      <View style={styles.header1}>
        <View style={styles.header1_1}>
          <Text style={{fontSize:10}}>
            Write the App.js code to create this app, including the Quiz1 header above and all of the text that appears here
          </Text>
        </View>
        <View style={styles.header1_1}>
          <Text style={{fontSize:10,color:'red'}}>
            You may use any resource you want to complete this but do not ask for help from anyone. This should be your work entirely.
          </Text>
        </View>
        <View style={styles.header1_1}>
          <Text style={{fontSize:10, }}>
            Also, do not offer to help anyone and if someone asks you for help let me know so I can tell them this is inappropriate
          </Text>
        </View>
      </View>

      <View style={styles.body1}>
        <View style={{backgroundColor:'red', flex:1,alignItems:'center',
        justifyContent: 'center',}}>
          <Text style={{fontSize:20}}>
          Red Left
          </Text>
        </View>
        <View style={{backgroundColor:'yellow', flex:1,alignItems:'center',justifyContent:"end"
        }}>
          <Text style={{fontSize:20, }}>
          Yellow Middle
          </Text>
        </View>
        <View style={{fontSize:20,backgroundColor:'aqua', flex:1,alignItems:'flex-end',
        justifyContent: 'top',}}>
          Aqua right
        </View>

      </View>

      <View style={styles.body2}>
        <View style={{flex:1, backgroundColor:'blue'}}>
        <Image
        style={{width:'100%',height:'100%'}}
        source={{uri:'https://cdn.shopify.com/s/files/1/0517/0210/4239/articles/blog_choosing_a_puppy_main_1024x1024_819bb606-6417-4f70-89ba-1f9865c91ce2_1024x.jpg?v=1620807930'}}
      />
        </View>

        <View style={{flex:1, backgroundColor:'lightgreen'}}>
          <Text style={{fontSize:14, alignItems:'center'}}>
            Select any image of a puppy from the web for the quiz...
          </Text>

        </View>

        <View style={{flex:1, backgroundColor:'lighgreen'}}>
              <Image
            style={{width:'100%',height:'100%'}}
            source={{
              uri: 'https://cdn.shopify.com/s/files/1/0517/0210/4239/articles/blog_choosing_a_puppy_main_1024x1024_819bb606-6417-4f70-89ba-1f9865c91ce2_1024x.jpg?v=1620807930',
            }}
          />
        </View>

        <View style={{flex:1, backgroundColor:'white'}}>
          <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={{fontSize:15,}}>
            Enter your name and birth year in the textfield below
            </Text>
          </View>
          <View style={{flex:1,backgroundColor:'yellow'}}>
                <TextInput
            style={{flex:1,fontSize:14}}


            placeholder="your full name"

          />
                <TextInput
            style={{flex:1,fontSize:14}}


            placeholder="your birth year"

          />
                <Button

                title='submit'
                color='red'
                />

          </View>
          <View style={{flex:2, backgroundColor:'white'}}>
          </View>
        </View>

      </View>

      <View style={styles.footer}>
        <Text style={{fontSize:10}}>
          The goal of this Quiz is to test your mastery of Flex1Boxes, core ReactNative components, and basic component style elements
        </Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'yellow',

    flexDirection:'column',
    height:'100%',
    width:'40%',
    borderColor:'black',
    borderWidth:5
  },
  title: {
    // flex:1,
    // alignItems:'center',
    fontSize:40,
    // padding:25,
    color:"black",
  },
  header: {
    flex:0.5,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'yellow',
  },
  header1: {
    flex:0.5,
    flexDirection:'row',

    backgroundColor:'blue',
  },
  header1_1: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'yellow',
  },
  body1:{
    flex:2,
    flexDirection:'row',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  body2:{
    flex:2,
    flexDirection:'row',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  footer:{
    flex:0.1,
    backgroundColor:'white',
    alignItems:'center',justifyContent:'center'
  }



});
