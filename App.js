import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import Onbording from './src/components/onbording';
import Login from './src/components/HomeScreen';

const Loading = () => {
    <View>
      <ActivityIndicator size="large" />
   </View>  
};

export default App = () => {
  const [loading, setLoading] = useState(true);
  const [viewedOnbording, setViewedOnbording] = useState(false);

  const checkOnbording = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnbording');
  
      if (value !== null) {
          setViewedOnbording(true);
      }
    } catch (err) {
      console.log('Error @checkOnbording: ', err);
    } finally {
       setLoading(false);
    }
  };   

  useEffect(() => {
    checkOnbording();
}, []);

  return (
    <View style={styles.container}>
      {loading ? <Loading/> : viewedOnbording ? <Login/> : <Onbording/> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});