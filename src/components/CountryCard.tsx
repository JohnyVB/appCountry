import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { CountryBasic } from '../interfaces/countryBasic';

interface props {
    country: CountryBasic;
}

export const CountryCard = ({country}: props) => {

  return (
    <View style={StylesCard.bodyCard}>
        <Image 
           source={{uri: country.flags.png}}
           style={StylesCard.flag} 
        />
        <View style={StylesCard.bodyData}>
            <Text style={StylesCard.name}>{country.name.official}</Text>
            <Text style={StylesCard.data}>Population: {country.population}</Text>
            <Text style={StylesCard.data}>Region: {country.region}</Text>
            <Text style={StylesCard.data}>Capital: {country.capital}</Text>
        </View>
    </View>
  )
}

const StylesCard = StyleSheet.create({
    bodyCard: {
        backgroundColor: 'white',
        marginHorizontal: 50,
        marginVertical: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    flag: {
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    bodyData: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    data: {
        marginVertical: 3
    }
});
