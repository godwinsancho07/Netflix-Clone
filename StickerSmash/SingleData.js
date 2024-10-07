import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState,useEffect} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation'; // Import screen orientation API

export default function SingleData({ route, navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [images,setimages]=useState([]);

  async function getformserver (){
    const req=await fetch("http://192.168.81.28:3000/show")
    var rr=await req.json()
    console.log(rr)
    setimages(rr);
    } 
    useEffect(()=>{
      getformserver()
    },[])
    

  // Function to lock screen to landscape
  const lockOrientationLandscape = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  };

  // Function to lock back to portrait
  const lockOrientationPortrait = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  };

  // Function to handle video playback status changes
 
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <View style={styles.con4}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="white" style={styles.icon1} onPress={() => {
             
              navigation.goBack();
            }} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Video
            source={{ uri: `http://192.168.81.28:3000/videos/${route.params.movie}` }}
            style={{ width: '100%', aspectRatio: 16 /9 }}
            useNativeControls
            resizeMode="contain"
             ref={video}
          />
        </View>

        <Text style={styles.t1}>{route.params.name}</Text>

        <View style={styles.c1}>
          <Text style={styles.t2}>2023</Text>
          <Text style={styles.t3}> U/A 16+ </Text>
          <Text style={styles.t4}>2h 22m</Text>
          <MaterialIcons name="hd" size={15} color="#ffffff80" style={styles.i2} />
        </View>

        <View style={styles.con1}>
        <Entypo name="controller-play" size={24} color="black" />        
          <Text style={styles.t5}>Play</Text>
        </View>

        <View style={styles.con2}>
          <Feather name="download" size={24} color="white" style={styles.ico} />
          <Text style={styles.t6}>Download</Text>
        </View>

        <Text style={styles.t7}>
          In the modern world, computers have become an integral part of our daily lives...
        </Text>

        <View style={styles.con3}>
          <Entypo name="plus" size={24} color="white" />
          <AntDesign name="like2" size={24} color="white" />
          <Entypo name="share" size={24} color="white" />
        </View>
         <Text style={styles.t8}>More Like This</Text>

           <ScrollView style={styles.sc1}>
        <View style={styles.go}>
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
        </View>
        
        </ScrollView>
        </ScrollView>

      <View style={styles.navigationbar}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <Entypo name="home" size={24} color="white" style={styles.i4} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Fontisto name="person" size={22} color="white" style={styles.i3} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  t1: { fontSize: 25, fontWeight: 'bold', textTransform: 'capitalize', marginLeft: 10, marginTop: 5, color: 'white' },
  c1: { flexDirection: 'row', marginTop: 10 },
  t2: { marginLeft: 10, fontSize: 13, color: 'white' },
  t3: { backgroundColor: '#ffffff80', marginLeft: 10, fontSize: 13, color: 'white', borderRadius: 2 },
  t4: { marginLeft: 10, fontSize: 13, color: 'white' },
  i2: { marginLeft: 5 },
  con1: { marginLeft: 5, marginRight: 5, height: 50, backgroundColor: '#ffffff', borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 6 },
  t5: { color: 'black', fontSize: 18, marginLeft: 5, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center' },

  con2: { marginLeft: 5, marginRight: 5, height: 50, backgroundColor: '#ffffff50', borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 6 },
  t6: { color: 'white', fontSize: 18, marginLeft: 5, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center' },
  t7: { marginLeft: 5, marginRight: 5, flexWrap: 'wrap', color: 'white', marginTop: 30 },
  con3: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 },
  con4: { height: 50, backgroundColor: 'black', marginTop: 35 },
  icon1: { marginLeft: 10, marginTop: 13 },
  navigationbar: { height: 50, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-evenly', borderTopColor: 'white', borderTopWidth: 0.2 },
  i3: { marginLeft: 70, marginTop: 'auto', marginBottom: 'auto', justifyContent: 'center' },
  i4: { marginTop: 'auto', marginBottom: 'auto', justifyContent: 'center' },
  t8:{ color:"white",marginTop:20,marginLeft:5,fontWeight:"bold"},sc1:{
    padding:5
    
       
     },sc2:{
       height:150,
       width:100,
       borderRadius:10,
       marginRight:4
      
     },go:{
       
       flexDirection:"row",
       flexWrap:'wrap',
       
     }
});
