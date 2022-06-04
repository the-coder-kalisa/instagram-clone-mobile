import { ScrollView, View, Text, Image } from 'react-native'
import React from 'react'
import { post } from '../../data/User'
import tw from 'twrnc'
const Post = () => {
  return (
    <ScrollView>
      {post.map((user, index)=>(
          <View key={index}>
              <View>
                  <View></View>
              </View>
          </View>
      ))}
    </ScrollView>
  )
}

export default Post