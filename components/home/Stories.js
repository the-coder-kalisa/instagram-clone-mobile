import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";
import { user } from "../../data/User";
const Stories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={tw`flex-row justify-between`}>
       {user.map((user, index)=>(
         <View key={index} style={tw`items-center`}>
           <Image style={tw.style(`w-[70px] rounded-full mx-2 h-[70px]`, {borderWidth: 3, borderColor: 'bisque', borderStyle: 'solid'})} source={{uri: user.image}}/>
           <Text style={tw`text-white overflow-hidden`}>{user.name.length > 11 ? `${user.name.slice(0, 10)}...` : user.name}</Text>
         </View>
       ))}
     </View>
    </ScrollView>
  );
};

export default Stories;
