import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';

const Stack = createNativeStackNavigator();

export const StackNavigator =() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        contentStyle:{
          backgroundColor: 'white'
        }
      }}
    
    >
        <Stack.Screen name="Pagina1Screen" options={{ title: 'Pagina 1'}} component={ Pagina1Screen }/>
        <Stack.Screen name="Pagina2Screen" options={{ title: 'Pagina 1'}} component={ Pagina2Screen }/>
        <Stack.Screen name="Pagina3Screen" options={{ title: 'Pagina 1'}} component={ Pagina3Screen }/>
    </Stack.Navigator>
  );
}