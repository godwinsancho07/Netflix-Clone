import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login({navigation}) 
{

  // useState are used to store the data

  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const [loading, setLoading] = useState(false);
  const [wrong,setWrong] = useState(false);


  // function
  async function findfromserver(){

          if (!email || !password) {
          alert('Error')
          return;
          }


           setLoading(true); //it is used for check the textinput was interd or not interd
               const data={
               email:email,
               password:password
               }
               
                
                // senting the data
                 const god= await fetch("http://192.168.1.3:3000/Login",{
                 method:"post",
                 headers:{'Content-type': 'application/json'},
                 body:JSON.stringify(data)
                 })

                //geting the responce
                var res= await god.json()
                    if(res.length==0)
                    { 
                      alert('failed')//if the data was wrong sent alert
                      setWrong("true")
                    }
                    else
                    {
                      navigation.navigate("Home")
                    }
 
 
  
  }

  return (
    <View style={styles.container}>
        <Image source={require("./assets/1.png")} style={styles.img1}></Image>
        <Image source={require("./assets/2.png")} style={styles.img2}></Image>

            <TextInput style={styles.t1} placeholder='Email'onChangeText={text=>setemail(text)}></TextInput>
            <TextInput style={styles.t1} placeholder="Password" onChangeText={text=>setpassword(text)}></TextInput>

                <TouchableOpacity onPress={findfromserver}>
                     <Text style={styles.t2}>Log in</Text>
                </TouchableOpacity>
        
                      <Text style={styles.t} >Forgot password</Text>

                {/* it was used for empty space */}
                <View style={styles.continue3} ></View> 

             <TouchableOpacity onPress={()=> navigation.navigate("Signin")}> 
                 <View style={styles.continuer3} >
                     <Text style={styles.t10}> <Text style={styles.t12}> Don’t have an account? </Text><Text style={styles.t11}>Create one</Text></Text>
                 </View>
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
    
   
  },




});
