import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export const CountryCard = () => {
  return (
    <View style={StylesCard.bodyCard}>
        <Image 
           source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png'}}
           style={StylesCard.flag} 
        />
        <View style={StylesCard.bodyData}>
            <Text style={StylesCard.name}>Colombia</Text>
            <Text style={StylesCard.data}>Population: 81'770.900</Text>
            <Text style={StylesCard.data}>Region: latam</Text>
            <Text style={StylesCard.data}>Capital: Bogotá</Text>
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
