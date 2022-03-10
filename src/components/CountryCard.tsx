import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { CountryBasic } from '../interfaces/countryBasic';
import { RootStackParams } from '../router/Navigator';

interface props {
    country: CountryBasic;
    navigation: StackNavigationProp<RootStackParams, "HomeScreen">
}

export const CountryCard = ({ country, navigation }: props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CountryScreen' as never, { CountryOfficialName: country.name.official } as never)}
        >
            <View style={StylesCard.bodyCard}>
                <Image
                    source={{ uri: country.flags.png }}
                    style={StylesCard.flag}
                />
                <View style={StylesCard.bodyData}>
                    <Text style={StylesCard.name}>{country.name.official}</Text>
                    <Text style={StylesCard.data}>Population: {country.population}</Text>
                    <Text style={StylesCard.data}>Region: {country.region}</Text>
                    <Text style={StylesCard.data}>Capital: {country.capital}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
