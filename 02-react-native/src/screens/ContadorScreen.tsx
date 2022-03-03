import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';

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

        <TouchableOpacity
            onPress= { () => setContador( contador + 1)  }
        >   
            <View style= {{
                backgroundColor: 'blue',
                borderRadius: 100,
            }}>
                <Text>+1</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
