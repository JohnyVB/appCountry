import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import { RootStackParams } from '../router/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'CountryScreen'>{};

export const CountryScreen = ({ navigation, route }: Props) => {

  const { CountryOfficialName } = route.params;

  return (
    <Text>country: { CountryOfficialName }</Text>
  )
}
