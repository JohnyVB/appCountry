import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { CountryCard } from '../components/CountryCard';
import { useQuery } from 'react-query';
import { getAll } from '../api/apiCountry';

export const HomeScreen = () => {

  const { isLoading, error, data } = useQuery('all', getAll);
  
  return (
    <View style={StylesHome.bodyHome}>

      {
        (isLoading)
          ?(
              <ActivityIndicator 
                  style={StylesHome.activityIndicator}
                  size={80}
                  color="#171717"
              />
          ):(
            <FlatList 
              data={data}
              keyExtractor={(item) => item.name.official}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => <CountryCard country={item} />}
            />
          )
      }

    </View>
  )
}

const StylesHome = StyleSheet.create({
  bodyHome: {
    flex: 1
  },
  activityIndicator: {
    height: 400
  }
});
