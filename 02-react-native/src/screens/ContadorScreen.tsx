import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)

  return (
    <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }}>
        <Text style= {{
            textAlign: 'center',
            fontSize: 40,
            color: 'black',
        }}>
        Contador:  {contador }
        </Text>

        <Button
            title="Click"
            onPress={ () => setContador (contador + 1 )}
        />
    </View>
  )
}
