import { View,SafeAreaView, Text, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc' 
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import { createContext, useEffect } from 'react/cjs/react.production.min'

const HomeContext= createContext();

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`andriod:pt-[${StatusBar.currentHeight}px] bg-black h-full`}>

      <Header />
      <Stories />
    </SafeAreaView>
  )
}

export default HomeScreen