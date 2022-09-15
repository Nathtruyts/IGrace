import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Onbording from './src/components/onbording';

export default function App() {
  return (
    <NavigationContainer>
      <Onbording/>
    </NavigationContainer>
  );
}

