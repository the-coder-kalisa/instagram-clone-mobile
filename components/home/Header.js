import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Header = () => {
  return (
    <View style={tw`flex justify-between`}>
      <Text style={tw`text-white font-bold text-3xl`}>Instagram</Text>
      <View></View>
    </View>
  )
}

export default Header