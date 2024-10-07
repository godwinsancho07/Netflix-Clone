import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Signin({navigation}) 
{

    //usestate are used for storing the data
    const[name,setname]=useState("");
    const[link,setlink]=useState("");
    const[type,settype]=useState("null");
    const[subtype,setsubtype]=useState("null");

    const data1 = [
      { label: 'New on Netflix', value: '1' },
      { label: "Today's Top Picks For You", value: '2' },
      { label: 'US Movies Dubbed in Tamil', value: '3' },
      { label: 'Exciting TV Shows', value: '4' },
      { label: 'Movies & Shows Dubbed in Tamil', value: '5' },
      { label: 'Indian Crime Movies', value: '6' },
      { label: 'Indian Comedy', value: '7' },
      { label: 'US TV Shows', value: '8' },
    ];

    
    const data2 = [
      { label: 'TV Shows', value: '1' },
      { label: "Movies", value: '2' },
     
    ];











      // function
      async function postToserver()
        {
           //it is used for check the textinput was interd or not interd
             const data={
                        name:name,
                        link:link,
                        type:type,
                        subtype:subtype
                        }

console.log(data);


           // senting the data
                const god= await fetch("http://192.168.1.2:3000/data",{
                method:"post",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(data)
                })



      const res= await god.json()
       navigation.navigate("Home")


  
}



  return (
    <View style={styles.container}>
    <Image source={require("./assets/3.jpg")} style={styles.img1}></Image>
    <Image source={require("./assets/2.png")} style={styles.img2}></Image>

            <TextInput style={styles.t1} placeholder='Name' onChangeText={text=>setname(text)}></TextInput>
            <TextInput style={styles.t1} placeholder='Link' onChangeText={text=>setlink(text)}></TextInput>
            
 <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data1}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={type}
      
      onChange={item => {
        settype(item.label);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
    />

<Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data2}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={subtype}
      onChange={item => {
        setsubtype(item.label);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
    />
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
     

           
           
                  <TouchableOpacity onPress={postToserver}>
                       <Text style={styles.t2} >post</Text>
                  </TouchableOpacity>
            
           
             
        
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },continue1:{
    backgroundColor:"white",
    height:80
  },continue3:{
    height:20,
    width:280,
    marginLeft:"auto",
    marginRight:"auto",
    justifyContent:"center",
   
    marginTop:135
 }, img1:{
    height:"100%",
    width:"100%",
    position:"absolute"
  },img2:{
    height:40,
    width:40,
    marginLeft:"auto",
    marginRight:"auto",
    justifyContent:"center",
    marginTop:300
    },t:{
    height:50,
    width:280,
    marginLeft:"auto",
    marginRight:"auto",
    justifyContent:"center",
    marginTop:5,
    color:"red",
    textAlign:"right",
    textAlignVertical:"center",
    fontSize:15,
    fontWeight:"bold",
    },t1:{
    backgroundColor:"white",
    height:50,
    width:280,
    marginLeft:"auto",
    marginRight:"auto",
    justifyContent:"center",
    marginTop:5,
    opacity:0.9,
    padding:10,
  },t2:{
    backgroundColor:"red",
    height:50,
    width:280,
    marginLeft:"auto",
    marginRight:"auto",
    justifyContent:"center",
    marginTop:10,
    textAlign:"center",
    textAlignVertical:"center",
    color:"white",
    fontSize:20,
    fontWeight:"bold",
  },t11:{
    color:"white",
    fontWeight:"bold"
  },t12:{
    color:"red"
  },t10:{
    textAlign:"center",
    fontSize:15,
    
   
  }, dropdown: {
    marginTop:5,
    height: 50,
    width:280,
    marginLeft:"auto",
    marginRight:"auto",
    justifyContent:"center",
    borderBlockColor:"gray",
    borderWidth:0.5,
    backgroundColor:"white",
    opacity:0.9
  },
  icon: {
    marginLeft:10,
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },


});
