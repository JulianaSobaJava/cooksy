import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./views/main";
import MyRecipes from "./views/myrecipes";
import CookNow from "./views/cooknow";
import Settings from "./views/settings";
import {FontAwesome5} from "@expo/vector-icons"
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";


const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  return (
    <View style={styles.container}>
    <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 29,
          marginHorizontal: 15,
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'center',
          height: 63,
          borderRadius: 12,
          paddingVertical:6,
          shadowColor: '#000',
          shadowOpacity: 0.02,
          shadowOffset: {
            width: 10,
            height: 10
          }}}}>
      <Tab.Screen name="Main" component={Main} options={{
        tabBarIcon:({color, size})=>(
          <FontAwesome5 name="lightbulb"color={color} size={size}/>
        ),
      }}/>
      <Tab.Screen name="MyRecipes" component={MyRecipes} options={{
        tabBarIcon:({color, size})=><FontAwesome5 name="list"color={color} size={size}/>,
        tabBarLabel:'My recipes'
      }}/>
      <Tab.Screen name="CookNow!" component={CookNow} options={{
        tabBarIcon:({color, size})=><FontAwesome5 name="clock"color={color} size={size} />,
        tabBarLabel:'Cook now!'
      }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon:({color, size,focused})=>
          <FontAwesome5 name="cog"color={color} size={size} focused={focused ? "":""}/>
         ,
        tabBarLabel:'Settings'
      }}/>
    </Tab.Navigator>
    </View >
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex:1,
    position:'relative',
    backgroundColor:"#FF0000"
  },
});