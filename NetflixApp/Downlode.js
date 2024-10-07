import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Downlode({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <AntDesign name="arrowleft" size={24} color="white" style={styles.icon} onPress={() => navigation.goBack()} />
       <Text style={styles.t1}>Download</Text>
      </View>

      <View style={styles.container2}>
       <Image source={require("./assets/55.jpg")} style={styles.i1}></Image>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },container1:{
    backgroundColor:"black",
    height:60,
    marginTop:35,
    flexDirection:"row",
    padding:10,
    alignItems:"center"
  },t1:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    marginLeft:15

  },container2:{
    backgroundColor:"black",
    height:"100%"
  },i1:{
  marginRight:"auto",
  marginLeft:"auto",
  justifyContent:"center"  
  }
})