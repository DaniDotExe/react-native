import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { Platform, Text, useColorScheme } from 'react-native';
import { colores } from '../theme/appTheme';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIos/>
        : <TabAndroid/>
}


/* Parte de Android */
const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabAndroid() {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={ true }
        barStyle={{
            backgroundColor: colores.primary
        }}
        screenOptions = { ({ route }) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: ({ color, focused }) => {

                let iconName: string = '';

                switch( route.name ){
                    case 'Tab1Screen':
                        iconName = 'T1'
                    break;

                    case 'Tab2Screen':
                        iconName = 'T2'
                    break;

                    case 'StackNavigator':
                        iconName = 'St'
                    break;
                }

                /*console.log(route.name)*/
                return <Text style={{ color }}>{ iconName }</Text>
            }
        })
    }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2'}}component={Tab2Screen} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

/* Parte de IOS */
const BottomTabIos = createBottomTabNavigator();

const TabsIos= () => {
  return (
    <BottomTabIos.Navigator
        sceneContainerStyle = {{ 
            backgroundColor: 'red'
         }}
        
        screenOptions = { ({ route }) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: ({ color, focused, size }) => {

                let iconName: string = '';

                switch( route.name ){
                    case 'Tab1Screen':
                        iconName = 'T1'
                    break;

                    case 'Tab2Screen':
                        iconName = 'T2'
                    break;

                    case 'StackNavigator':
                        iconName = 'St'
                    break;
                }

                /*console.log(route.name)*/
                return <Text style={{ color }}>{ iconName }</Text>
            }
        })
    }
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="Tab2Screen" options={{ title: 'Tab2'}}component={Tab2Screen} />
      <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabIos.Navigator>
  );
}