import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{};

export const Pagina1Screen = ({ navigation }: Props) => {

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina1Screen</Text>

        <Button 
          title='Ir a pagina 2.5'
          onPress={ () => navigation.navigate('Pagina2Screen') }
        />

        <Text>Navegar con argumentos</Text>

        <TouchableOpacity
          style={{ }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro',
          }) }
        >
          <Text>Pedro</Text>
        </TouchableOpacity>

    </View>
  )
}
