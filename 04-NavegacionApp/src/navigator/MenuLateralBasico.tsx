import React from 'react';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();
  console.log(width)

  return (
    <Drawer.Navigator
      screenOptions={{
      drawerType: width >= 412 ? 'permanent' : 'front', // Menú modo horizontal
      headerShown: false 
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}