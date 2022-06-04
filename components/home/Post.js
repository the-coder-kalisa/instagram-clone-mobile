import { ScrollView, View, Text, Image, Dimensions } from "react-native";
import React, {useEffect} from "react";
import { post } from "../../data/User";
import tw from "twrnc";
import {  MaterialIcons} from "@expo/vector-icons";
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

const Post = () => {
  useEffect(()=>{console.log()},[])
  return (
    <ScrollView style={tw`my-5`}>
      {post.map((user, index) => (
        <View key={index}>
          <View style={tw`flex-row px-2 items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <Image
                style={tw`h-[70px] mr-2 rounded-full w-[70px]`}
                source={{ uri: user.profile }}
              />
              <Text style={tw`text-white text-lg font-bold`}>{user.name}</Text>
            </View>
            <MaterialIcons name="more-horiz" size={20} color="white" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row justify-between`}>
              {user.images.map((image, index) => (
                <Image
                  key={index}
                  style={tw.style(``,{width: useDimensions().window.width, height: Dimensions.get('window').height-400})}
                  source={{ uri: image }}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

export default Post;
