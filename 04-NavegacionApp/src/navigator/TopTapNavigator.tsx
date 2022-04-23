import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } =  useSafeAreaInsets()

  return (
    <Tab.Navigator
        style={{
            paddingTop: top,
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
            
        }}
        screenOptions= { ({ route }) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarIcon: ({ color, focused }) => {

                let iconName: string = '';

                switch( route.name ){
                    case 'ChatScreen':
                        iconName = 'Ch'
                    break;

                    case 'ContactScreen':
                        iconName = 'Co'
                    break;

                    case 'AlbumScreen':
                        iconName = 'Al'
                    break;
                }

                /*console.log(route.name)*/
                return <Text style={{ color }}>{ iconName }</Text>
            }
        })
    }
    >
      <Tab.Screen name="ChatScreen" component={ ChatScreen } />
      <Tab.Screen name="ContactScreen" component={ ContactScreen } />
      <Tab.Screen name="AlbumScreen" component={ AlbumScreen } />
    </Tab.Navigator>
  );
}