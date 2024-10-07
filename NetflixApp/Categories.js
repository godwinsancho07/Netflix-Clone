import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Categories({navigation}) {
  return (
    
    <View style={ styles.container}>
          <Text style={styles.t}>Categories</Text>
           <Text></Text>
          <Text style={styles.t1}>Movies & Shows Dubbed in Tamil</Text>
          <Text style={styles.t1}>Exciting TV Shows</Text>
          <Text style={styles.t1}>Indian Crime Movies</Text>
          <Text style={styles.t1}>Indian Crime Movies</Text>
          <Text style={styles.t1}>US Movies Dubbed in Tamil</Text>
          <Text style={styles.t1}>New on Netflix</Text>
          <Text style={styles.t1}>Today's Top Picks For You</Text>
          <Text style={styles.t1}>US TV Shows</Text>
          <Text style={styles.t1}>Award-Winning TV Shows</Text>
       
          <MaterialIcons name="cancel" size={40} color="white"  style={styles.i1} onPress={() => navigation.goBack()} />
         
    </View>
  )
}



const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"black",
    justifyContent:"center"
},t:{
    color:"white",
    fontSize:22,
    textAlign:"center",
    fontWeight:"bold",
    marginTop:12
},t1:{
    color:"white",
    fontSize:18,
    textAlign:"center",
   
},i1:{
marginLeft:"auto",
marginRight:"auto",
justifyContent:"center"
}


})