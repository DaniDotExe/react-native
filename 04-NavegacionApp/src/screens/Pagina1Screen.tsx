import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{};

export const Pagina1Screen = ({ navigation }: Props) => {

  return (
    <View style={ styles.globalMargin }>
        <Text>Pagina1Screen</Text>

        <Button 
          title='Ir a pagina 2.5'
          onPress={ () => navigation.navigate('Pagina2Screen') }
        />

    </View>
  )
}
