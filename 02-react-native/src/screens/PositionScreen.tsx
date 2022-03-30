import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        width: 150,
        height: 500,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth:10,
        borderColor: 'white',
        top: 20,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth:10,
        borderColor: 'white',
    }, 
});