import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";


const Stack = createNativeStackNavigator();

import { MainScreen } from './App/Screens/MainScreen';
import { LoginScreen } from './App/Screens/LoginScreen';
import { SecondBox } from './App/Parts/SecondBox';
import { ThirdBox } from './App/Parts/ThirdBox';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen 
          name =  "LoginPage"
          component = {LoginScreen} 
      />
      <Stack.Screen 
          name =  "MainScreen"
          component = {MainScreen} 
      />
  
    </Stack.Navigator> 
  </NavigationContainer>
  )
}

  

