import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View ,ScrollView,TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function Home({navigation}) {


const [images,setimages]=useState([]);
const [images1,setimages1]=useState([]);
const [images2,setimages2]=useState([]);
const [images3,setimages3]=useState([]);
const [images4,setimages4]=useState([]);
const [images5,setimages5]=useState([]);
const [images6,setimages6]=useState([]);
const [images7,setimages7]=useState([]);




async function getformserver (){
const req=await fetch("http://192.168.81.28:3000/show")
var rr=await req.json()
console.log(rr)
setimages(rr);
} 
useEffect(()=>{
  getformserver()
},[])



async function getformserver1 (){
  const req=await fetch("http://192.168.81.28:3000/show1")
  var rr=await req.json()
  console.log(rr)
  setimages1(rr);
  } 
  useEffect(()=>{
    getformserver1()
  },[])


  async function getformserver2 (){
    const req=await fetch("http://192.168.81.28:3000/show2")
    var rr=await req.json()
    console.log(rr)
    setimages2(rr);
    } 
    useEffect(()=>{
      getformserver2()
    },[])



    async function getformserver3(){
      const req=await fetch("http://192.168.81.28:3000/show3")
      var rr=await req.json()
      console.log(rr)
      setimages3(rr);
      } 
      useEffect(()=>{
        getformserver3()
      },[])


      async function getformserver4(){
        const req=await fetch("http://192.168.81.28:3000/show4")
        var rr=await req.json()
        console.log(rr)
        setimages4(rr);
        } 
        useEffect(()=>{
          getformserver4()
        },[])




        async function getformserver5(){
          const req=await fetch("http://192.168.81.28:3000/show5")
          var rr=await req.json()
          console.log(rr)
          setimages5(rr);
          } 
          useEffect(()=>{
            getformserver5()
          },[])




          async function getformserver6(){
            const req=await fetch("http://192.168.81.28:3000/show6")
            var rr=await req.json()
            console.log(rr)
            setimages6(rr);
            } 
            useEffect(()=>{
              getformserver6()
            },[])



            async function getformserver7(){
              const req=await fetch("http://192.168.81.28:3000/show7")
              var rr=await req.json()
              console.log(rr)
              setimages7(rr);
              } 
              useEffect(()=>{
                getformserver7()
              },[])



  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Image source={require("./assets/2.png")} style={styles.i1}></Image>
        <TouchableOpacity onPress={()=>navigation.navigate("Downlode")}>
        <AntDesign name="download" size={24} color="white"  style={styles.ic1}/> 
        </TouchableOpacity>
        <AntDesign name="search1" size={24} color="white" style={styles.ic2} onPress={()=>navigation.navigate("Search")} />
      </View>

      <View style={styles.container2}>
       <TouchableOpacity onPress={()=>{navigation.navigate("Tvshows")}}>  
        <Text style={styles.t1}>TV Shows</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{navigation.navigate("Movies")}}>
       <Text style={styles.t2}>Movies</Text>
       </TouchableOpacity>
         <TouchableOpacity onPress={()=>{navigation.navigate("Categories")}}>
         <View style={styles.t3} >
         <Text style={styles.t4}>Categories  </Text>
         <AntDesign name="down" size={15} color="white" style={styles.t4}/>
         </View>
           </TouchableOpacity>
         
      </View>

         <View style={styles.container3}>
           <Text style={styles.t5}>Movies & Shows Dubbed in Tamil</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>{
              navigation.navigate("singledata",val)
              console.log(val);
              }}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>




        <View style={styles.container3}>
           <Text style={styles.t5}>Exciting TV Shows</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images1.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("link")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>




        <View style={styles.container3}>
           <Text style={styles.t5}>Indian Crime Movies</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images2.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>





        <View style={styles.container3}>
           <Text style={styles.t5}>Indian Comedy</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images3.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>





        <View style={styles.container3}>
           <Text style={styles.t5}>US Movies Dubbed in Tamil</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images4.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>





        <View style={styles.container3}>
           <Text style={styles.t5}>New on Netflix</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images5.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>






        <View style={styles.container3}>
           <Text style={styles.t5}>Today's Top Picks For You</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images6.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>


        
        <View style={styles.container3}>
           <Text style={styles.t5}>US TV Shows</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images7.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>








        <View style={styles.container3}>
           <Text style={styles.t5}>Award-Winning TV Shows</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>






        <View style={styles.container3}>
           <Text style={styles.t5}>New</Text>
         </View>
         <ScrollView horizontal={true}style={styles.sc1}>
         {
          images2.map((val,ind)=>(
            <TouchableOpacity key={ind} style={styles.sc1} onPress={()=>navigation.navigate("data")}>
            <Image source={{uri:val.link}}style={styles.sc2}/>
              </TouchableOpacity>
          ))
        }
        </ScrollView>






       

     
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
  },container1:{
    backgroundColor:"black",
    height:70,
    marginTop:35,
  },container2:{
    height:50,
    backgroundColor:"black"
  },container3:{
   marginTop:50,
    height:50,
    backgroundColor:"white"
    
  },i1:{
    height:30,
    width:30,
    marginTop:20,
    marginLeft:10
  },ic1:{
    
    marginTop:-25,
    marginLeft:270,
    
  },ic2:{
    marginTop:-25,
    marginLeft:320,
  },t1:{
    backgroundColor:"black",
    borderWidth:0.5,
    borderColor:"white",
    height:30,
    marginTop:5,
    fontWeight:"200",
    marginLeft:10,
    width:90,
    borderRadius:20,
    textAlign:"center",
    textAlignVertical:"center",
    color:"white",
  },t2:{
    backgroundColor:"black",
    borderWidth:0.5,
    borderColor:"white",
    height:30,
    marginTop:-30,
    fontWeight:"200",
    marginLeft:110,
    width:70,
    borderRadius:20,
    textAlign:"center",
    textAlignVertical:"center",
    color:"white",
  },t3:{
    backgroundColor:"black",
    borderWidth:0.5,
    borderColor:"white",
    height:30,
    marginTop:-30,
    fontWeight:"200",
    marginLeft:190,
    width:110,
    borderRadius:20,
    textAlign:"center",
    textAlignVertical:"center",
    color:"white",
    justifyContent:"center",
    flexDirection:"row"
  },
  t4:{
   color:"white",
   textAlign:"center",
   textAlignVertical:"center",
   fontWeight:"200"
  },container3:{
    marginTop:0,
    height:50,
    backgroundColor:"black",
    
  },t5:{
    color:"white",
    marginLeft:10,
  marginTop:"auto",
  marginBottom:"auto",
  justifyContent:"center",
  fontWeight:"bold",
  fontSize:17
    
  },sc1:{
    backgroundColor:"black",
    height:150,
  },sc2:{
    height:150,
    width:100,
    borderRadius:10,
    marginLeft:10  }
  
});
