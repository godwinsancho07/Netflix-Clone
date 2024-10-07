import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signin from './Signin';
import Home from './Home';
import Adddatas from './Adddatas';
import MyTabs from './MyTabs';
import SingleData from './SingleData';
import Tvshows from './TVshows';
import Movies from './Movies';
import Categories from './Categories'
import Downlode from './Downlode';
import Search from './Search';
import Profile from './Profile';
import Mylist from './Mylist';

const stack=createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
   
    <stack.Screen name='Init' component={MyTabs}></stack.Screen> 
    <stack.Screen name="Home" component={Home}/>
    <stack.Screen name='Tvshows' component={Tvshows}></stack.Screen>
    <stack.Screen name='Movies' component={Movies}></stack.Screen>
    <stack.Screen name='Categories' component={Categories}></stack.Screen>
    <stack.Screen name='Downlode' component={Downlode}></stack.Screen>
    <stack.Screen name='Search' component={Search}></stack.Screen>
    <stack.Screen name='Mylist' component={Mylist}></stack.Screen>
    <stack.Screen name='data' component={Adddatas}></stack.Screen>
    
  
   
    
      <stack.Screen name="Login" component={Login}></stack.Screen>
      <stack.Screen name="Signin" component={Signin}/>
      <stack.Screen name="singledata" component={SingleData}/>
      <stack.Screen name='Profile' component={Profile}/>
    
       
      
       </stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
