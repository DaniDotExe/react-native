//ok
import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { Text, View } from 'react-native';
//import HolaMundoScreen from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';

const App = () => {
  return (
    <SafeAreaView style= {{flex: 1,}}>
      {/*<HolaMundoScreen/> */}
      {/*<ContadorScreen/> */}
      <BoxObjectModelScreen/>
    </SafeAreaView>
  )
}

export default App;