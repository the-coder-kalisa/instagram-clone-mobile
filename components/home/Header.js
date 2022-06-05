import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Badge } from "react-native-paper";
const Header = () => {
  return (
    <View style={tw`flex-row my-[20px] items-center justify-between`}>
      <TouchableOpacity>
        <Text style={tw.style(`text-white font-bold text-3xl`)}>Instagram</Text>
      </TouchableOpacity>
      <View style={tw`flex-row`}>
        <TouchableOpacity style={tw`mx-2`}>
          <FontAwesome name="plus-square-o" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`mx-2`}>
          <MaterialIcons name="favorite-outline" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`mx-2`}>
          <View style={tw`relative`}>
            <MaterialCommunityIcons
              name="facebook-messenger"
              size={40}
              color="white"
            />
            <View
              style={tw`absolute top-0 right-0 p-[2px] rounded-full bg-red-500 font-bold text-lg`}
              size={18}
              color="primary"
            >
              <Text style={tw`font-bold text-white`}>11</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
