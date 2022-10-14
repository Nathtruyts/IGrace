import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './routes';
import Details from '../Stack Pages/Details';

const Stack = createStackNavigator();

export default function Naviagtion() {

  return (
      <Stack.Navigator>
            <Stack.Screen name="Main" component={Routes} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={Details} /> 
      </Stack.Navigator>
  )
}