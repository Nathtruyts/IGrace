
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Routes from './src/routes';
import Details from './src/Stack Pages/Details/index';

const 

export default App = () => {
  
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
);
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});