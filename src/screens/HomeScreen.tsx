import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CountryCard } from '../components/CountryCard';
import { useCountry } from '../hooks/useCountry';

import { useQuery } from 'react-query';
import { ResponseAll } from '../interfaces/responseAll';

export const HomeScreen = () => {

  const { isLoading, error, data } = useQuery('all', () =>
    fetch('https://restcountries.com/v3.1/all').then(res =>
      res.json()
    )
  );

  console.log('DATA: ', data);
  

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
