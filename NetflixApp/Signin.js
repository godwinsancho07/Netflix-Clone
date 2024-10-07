import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default function Signin({navigation}) 
{

    //usestate are used for storing the data
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[loading, setLoading] = useState(false);


      // function
      async function postToserver()
        {
          if (!email || !password|| !name)
              {
                alert('Error')
                return;
              }


          setLoading(true); //it is used for check the textinput was interd or not interd
             const data={
                        name:name,
                        email:email,
                        password:password
                        }



           // senting the data
                const god= await fetch("http://192.168.1.3:3000/signin",{
                method:"post",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(data)
                })



      const res= await god.json()
       navigation.navigate("Login")


  
}



  return (
    <View style={styles.container}>
    <Image source={require("./assets/3.jpg")} style={styles.img1}></Image>
    <Image source={require("./assets/2.png")} style={styles.img2}></Image>

            <TextInput style={styles.t1} placeholder='Name' onChangeText={text=>setname(text)}></TextInput>
            <TextInput style={styles.t1} placeholder='Email' onChangeText={text=>setemail(text)}></TextInput>
            <TextInput style={styles.t1} placeholder="Password" secureTextEntry onChangeText={text=>setpassword(text)}></TextInput>
           
           
                  <TouchableOpacity onPress={postToserver}>
                       <Text style={styles.t2} >Sign in</Text>
                  </TouchableOpacity>
            
            {/* for adding gap */}
            <View style={styles.continue3} ></View>

                <TouchableOpacity onPress={()=>navigation.navigate("Login")}> 
                     <View style={styles.continuer3} >
                           <Text style={styles.t10}> <Text style={styles.t12}> Did you have an account? </Text><Text style={styles.t11}>Log in</Text>  </Text>
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
