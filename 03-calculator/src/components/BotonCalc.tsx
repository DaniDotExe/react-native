import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
}

const naranjaColor = '#FF9427'
const grisColor = '#9B9B9B'

export const BotonCalc = ({texto = 'C', color = '#2D2D2D', ancho = false}: Props) => {
  return (
    <TouchableOpacity>
        <View style={[
            styles.boton,
            {backgroundColor: color,
            width: (ancho===true) ? 180 : styles.boton.width
            }
        ]}>
            {/* <Text style={[
                styles.botonTexto,
                (color === '#9B9B9B')
                    ? {color: 'black'}
                    : {color: 'white'}
            ]}
            > */}
            <Text style={{
                ...styles.botonTexto,
                color: ( color === '#9B9B9B') ? 'black' : 'white'
            }}>
            {texto}</Text>
        </View>
    </TouchableOpacity>
  )
}

