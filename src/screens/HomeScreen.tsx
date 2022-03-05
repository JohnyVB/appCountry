import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { CountryCard } from '../components/CountryCard';

export const HomeScreen = () => {
  return (
    <View style={StylesHome.bodyHome}>
      <CountryCard />
    </View>
  )
}

const StylesHome = StyleSheet.create({
    bodyHome: {
      flex: 1
    }
});