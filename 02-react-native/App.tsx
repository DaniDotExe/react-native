//ok
import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { Text, View } from 'react-native';
//import HolaMundoScreen from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style= {{flex: 1,}}>
      {/*<HolaMundoScreen/> */}
      {/*<ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionesScreen/> */}
      <PositionScreen/>
    </SafeAreaView>
  )
}

export default App;