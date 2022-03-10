import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { CountryScreen } from '../screens/CountryScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    CountryScreen: { CountryOfficialName: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='CountryScreen' component={CountryScreen} />
    </Stack.Navigator>
  )
}
