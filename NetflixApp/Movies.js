import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Tvshows({ navigation }) {
  const [images, setImages] = useState([]);

  async function getformserver() {
    const req = await fetch("http://192.168.81.28:3000/mo");
    var rr = await req.json();
    console.log(rr);
    setImages(rr);
  }

  useEffect(() => {
    getformserver();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <AntDesign name="arrowleft" size={24} color="white" style={styles.icon} onPress={() => navigation.goBack()} />
        <Text style={styles.t1}>Movies</Text>
      </View>
      <ScrollView style={styles.sc1}>
        <View style={styles.imageContainer}>
          {
            images.map((val, ind) => (
              <TouchableOpacity key={ind} style={styles.imageWrapper} onPress={() => {
                navigation.navigate("singledata", val);
                console.log(val);
              }}>
                <Image source={{ uri: val.link }} style={styles.sc2} />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  container1: {
    backgroundColor: "black",
    height: 60,
    marginTop: 35,
    flexDirection: "row",
  },
  icon: {
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "center",
    marginLeft: 10,
  },
  t1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 15,
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "center",
  },
  sc1: {
    padding: 10,
    
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around",
  },
  imageWrapper: {
    marginBottom: 10,
  },
  sc2: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
});
