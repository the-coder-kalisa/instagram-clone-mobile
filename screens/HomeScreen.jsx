import { View,SafeAreaView, Text, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc' 
import Header from '../components/home/Header'
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`andriod:pt-[${StatusBar.currentHeight}px] bg-black h-full`}>
      <Header />
    </SafeAreaView>
  )
}

export default HomeScreen