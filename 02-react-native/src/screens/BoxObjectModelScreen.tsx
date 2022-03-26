import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flex: 1,
    },
    title: {
      fontSize: 20,
      margin: 10,
      padding: 15,
      paddingTop: 45,
      borderWidth: 20,
      textAlign: 'center',
    },
});
 