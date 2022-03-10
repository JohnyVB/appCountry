import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Navigator } from './src/router/Navigator';

export default function App() {

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
