import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Rastreio } from './views';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AreaRestrita from './views/arearestrita/AreaRestrita';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home} 
          options={{
            title:'WEIFLog',
            headerStyle: {backgroundColor: '#f58634'},
            headerTintColor: '#333',
            headerTitleStyle: {fontWeight: 'bold', alignSelf: 'center'}
          }}/>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

