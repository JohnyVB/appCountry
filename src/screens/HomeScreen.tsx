import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { CountryCard } from '../components/CountryCard';
import { Regions } from '../api/apiCountry';
import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../router/Navigator';
import { useCountry } from '../hooks/useCountry';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{};

export const HomeScreen = ({ navigation }: Props) => {

  const {loadCountries, isLoading, countryList} = useCountry();

  const [selectedRegion, setselectedRegion] = useState(null);  

  return (
    <View style={StylesHome.bodyHome}>
      <View style={StylesHome.viewPicker}>
        <Picker
          selectedValue={selectedRegion}
          onValueChange={(itemValue, itemIndex) => setselectedRegion(itemValue)}
        >
          <Picker.Item enabled={false} label="Filter by Region" value={null} />
          {
            Regions.map(item => <Picker.Item key={item} label={item} value={item} />)
          }

        </Picker>
      </View>

      <View>
        {
          (isLoading)
            ? (
              <ActivityIndicator
                style={StylesHome.activityIndicator}
                size={80}
                color="#171717"
              />
            ) : (
              <FlatList
                data={countryList}
                keyExtractor={(item) => item.name.official}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CountryCard navigation={navigation} country={item} />}
              />
            )
        }
      </View>

    </View>
  )
}

const StylesHome = StyleSheet.create({
  bodyHome: {
    flex: 1
  },
  activityIndicator: {
    height: 400
  },
  viewPicker: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft: 25,
    width: 250,
    borderRadius: 5
  }
});
