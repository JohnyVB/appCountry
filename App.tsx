import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { CountryScreen } from './src/screens/CountryScreen';

import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {

  const Stack = createNativeStackNavigator();

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CountryScreen" component={CountryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
