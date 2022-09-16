import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

import Routes from './src/routes';
import Onbording from './src/components/onbording';
import HomeScreen from './src/components/HomeScreen';

const Loading = () => {

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

}, [])

    return(
      <View>
        <ActivityIndicator size="large" />
    </View>  
  );
};

export default function App() {
  const [Loading, setLoading] = useState(true);
  const [viewedOnbording, setViewedOnbording] = useState(false);

  return (
    <View style={styles.container}>
      {Loading ? <Loading /> : viewedOnbording ? <HomeScreen/> : <Onbording/> }
    </View>
  );
};
