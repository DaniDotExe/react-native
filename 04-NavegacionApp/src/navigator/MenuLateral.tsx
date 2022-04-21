import React from 'react';
import 'react-native-gesture-handler';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno {...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      
      {/* Parte de la imagen */}
      <View style={ styles.imagenContainer}>
        <Image 
          source={{
            uri: 'https://www.portafolio.co/files/main_video_image/uploads/2020/11/26/5fbfb1796cf4e.jpeg'
          }}
          style={ styles.imagen }
        />
      </View>

      {/* Opciones del menu */}
      <View style= {styles.menuContainer}>

          <TouchableOpacity 
            style={ styles.menuButon }
            onPress={ () => navigation.navigate('Tabs')}
          >
            <Text style={styles.menuTexto}>Navegación Stack</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={ styles.menuButon }
            onPress={ () => navigation.navigate('SettingsScreen')}
          >
            <Text style={styles.menuTexto} >Ajustes</Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}