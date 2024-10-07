import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Profile({navigation}) {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
         <Image source={require("./assets/8.jpg")} style={styles.Image}></Image>
         
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("Mylist")}}>
      <View style={styles.container3}>
          <Text style={styles.t1}>My List</Text>
          <AntDesign name="right" size={24} color="white" style={styles.t1} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Downlode")}}>
      <View style={styles.container4}>
          <Text style={styles.t1}>Downlode</Text>
          <AntDesign name="right" size={24} color="white" style={styles.t1} />
      </View>
      </TouchableOpacity>
      

    </View>

    
  );
}

const styles = StyleSheet.create({
  container1:{
    backgroundColor:"black",
    flex:1
  },
  container2:{
    backgroundColor:"black",
    height:200
  },Image:{
     height:100,
     width:100,
     borderRadius:20,
     marginRight:"auto",
     marginLeft:"auto",
     justifyContent:"center",
     marginTop:100,
   },container3:{
    backgroundColor:"black",
    height:60,
    marginTop:40,
    paddingLeft:20,
    flexDirection:"row",
    paddingRight:20,
    justifyContent:"space-between",
    
   },t1:{
    fontSize:18,
    fontWeight:"bold",
    color:"white",
    marginTop:"auto",
    marginBottom:"auto",
    justifyContent:"center"
   },i1:{
      paddingRight:10,
      marginRight:1
   },container4:{
    backgroundColor:"black",
    height:60,
    paddingLeft:20,
    flexDirection:"row",
    paddingRight:20,
    justifyContent:"space-between"
   }
});
