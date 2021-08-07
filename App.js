import React from 'react';

import { View } from 'react-native';

import {
  StatusBar
} from 'react-native';

import { Header } from './src/Header';
import { Feed } from './src/Feed';


export default function App(){
  return(
    <View style={{flex: 1}}>

      <StatusBar backgroundColor='#FFF' barStyle="dark-content" />
      <Header/>
      <Feed/>
    
    </View>
  )
}
