import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { Platform, Text, useColorScheme } from 'react-native';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

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
                        iconName = 'american-football'
                    break;

                    case 'TopTabNavigator':
                        iconName = 'arrow-forward-circle'
                    break;

                    case 'StackNavigator':
                        iconName = 'bandage'                     
                    break;
                }

                /*console.log(route.name)*/
                return <Icon name={ iconName } size={20} color={color} />
            }
        })
    }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'TopTabNavigator'}} component={TopTabNavigator} />
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

                    case 'TopTabNavigator':
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
      <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIos.Screen name="TopTabNavigator" options={{ title: 'TopTabNavigator' }}component={ TopTabNavigator } />
      <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIos.Navigator>
  );
}