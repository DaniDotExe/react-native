//ok
import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
//import { Text, View } from 'react-native';
//import HolaMundoScreen from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style= {{flex: 1,}}>
      {/*<HolaMundoScreen/> */}
      {/*<ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  )
}

export default App;