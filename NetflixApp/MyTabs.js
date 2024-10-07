import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Signin from './Adddatas';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator   screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{backgroundColor:'black'}}}  >
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon:(focused)=>
        (<Entypo name="home" size={24} color={focused.focused?"red":"white"} />)
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:(focused)=>(<Fontisto name="person" size={22} color={focused.focused?"red":"white"} />)}} />
      
      
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}