import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { useColorScheme } from 'react-native';
import { colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle = {{ 
            backgroundColor: 'red'
         }}
        
        screenOptions = {{
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
        }}
    >
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2'}}component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}