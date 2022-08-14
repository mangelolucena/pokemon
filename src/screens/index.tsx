import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from '../enums/ScreenEnum';
import PokemonDetailsScreen from './PokemonDetailsScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Screen.PokemonDetailsScreen}>
        <Stack.Screen
          name={Screen.PokemonDetailsScreen}
          component={PokemonDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
