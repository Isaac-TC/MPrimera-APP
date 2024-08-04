import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
//import { HomeworkScreen } from './src/screens/screens/HomeworkScreen';
//import { CounterScreen } from './src/screens/screens/CounterScreen';
//import { BoxObjectModelScreen } from './src/screens/screens/BoxObjectModelScreen';
//import { DimensionScreen } from './src/screens/screens/DimensionScreen';
import { PositionScreen } from './src/screens/screens/PositionScreen';
import { FlexScrenn } from './src/screens/screens/FlexScrenn';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    
   {/*<HomeworkScreen/>
   //<CounterScreen/>*/}
   {/*<BoxObjectModelScreen/>*/}
   {/*<DimensionScreen/>*/}
   <PositionScreen/>
   {/*<FlexScrenn/>*/}
   </SafeAreaView>
   
  )
}

export default App;