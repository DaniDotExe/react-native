import React from 'react'
import { View, Text } from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>  
        <Text style={{
          fontSize: 55,
          textAlign: 'center',
        }}>
          Hola mundo
        </Text>
    </View>
  )
}

export default HolaMundoScreen
