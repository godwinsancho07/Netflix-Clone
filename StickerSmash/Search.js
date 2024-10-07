import { StyleSheet, Text, View,Image, TextInput,ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Downlode({navigation}) {

  const[name,setname]=useState("")
const[save,setsave]=useState([])
  async function findfromserver(){





    useEffect(()=>{
      getformserver2()
    },[])

  }

  const onChangeAndSEarch = async (text)=>{
    const data={
      name:text
    }
    setname(text)
    
    const god= await fetch("http://192.168.81.28:3000/search",{
      method:"post",
      headers:{'Content-type': 'application/json'},
      body:JSON.stringify(data)
      })

      const res = await god.json();

      setsave(res);

  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <AntDesign name="arrowleft" size={24} color="white" style={styles.icon} onPress={() => navigation.goBack()} />
      <AntDesign name="download" size={24} color="white"  style={styles.ic1}/> 
      </View>

      <View style={styles.container2}>
      <AntDesign name="search1" size={24} color="white" style={styles.ic2} />
      <TextInput style={styles.t1} placeholder='Search shows,movies...' placeholderTextColor={"white"} onChangeText={onChangeAndSEarch} ></TextInput>
      </View>
      
      <ScrollView style={styles.sc1}>
        <View style={styles.go}>
        {
          save.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>{
              navigation.navigate("singledata",val)
              console.log(val);
              }}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </View>
        
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },container1:{
    backgroundColor:"black",
    height:60,
    marginTop:35,
    flexDirection:"row",
    padding:10,
    alignItems:"center",
    justifyContent:"space-between"
  },container2:{
    backgroundColor:"#ffffff20",
    height:50,
    padding:10,
    
    flexDirection:"row"
    
  },i1:{
  marginRight:"auto",
  marginLeft:"auto",
  justifyContent:"center"  
  },ic1:{
   marginRight:5
  },ic2:{
    color:"white",
   
  },t1:{
   marginLeft:30,
   color:"white"
  },sc1:{
 padding:5
 
    
  },sc2:{
    height:150,
    width:100,
    borderRadius:10,
    marginRight:6
   
  },go:{
    
    flexDirection:"row",
    flexWrap:'wrap',
    
  }
  
})