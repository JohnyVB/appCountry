import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { CountryCard } from '../components/CountryCard';
import { useQuery } from 'react-query';
import { getAll, Regions } from '../api/apiCountry';
import { Picker } from '@react-native-picker/picker';

export const HomeScreen = () => {

  const { isLoading, error, data } = useQuery('all', getAll);

  const [selectedRegion, setselectedRegion] = useState();

  return (
    <View style={StylesHome.bodyHome}>
      <View style={StylesHome.viewPicker}>
        <Picker
          selectedValue={selectedRegion}
          onValueChange={(itemValue, itemIndex) => setselectedRegion(itemValue)}
        >
          <Picker.Item enabled={false} label="Filter by Region" value="0" />
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
                data={data}
                keyExtractor={(item) => item.name.official}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CountryCard country={item} />}
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
