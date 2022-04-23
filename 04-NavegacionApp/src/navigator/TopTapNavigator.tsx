import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                        iconName = 'arrow-redo-circle'
                    break;

                    case 'ContactScreen':
                        iconName = 'boat'
                    break;

                    case 'AlbumScreen':
                        iconName = 'car'
                    break;
                }

                /*console.log(route.name)*/
                return <Icon name={ iconName } size={20} color={color} />
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