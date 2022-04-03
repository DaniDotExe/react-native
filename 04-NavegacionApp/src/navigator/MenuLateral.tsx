import React from 'react';
import 'react-native-gesture-handler';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno {...props } /> }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={ styles.imagenContainer}>
        <Image 
          source={{
            uri: 'https://www.portafolio.co/files/main_video_image/uploads/2020/11/26/5fbfb1796cf4e.jpeg'
          }}
          style={ styles.imagen }
        />
      </View>
    </DrawerContentScrollView>
  );
}