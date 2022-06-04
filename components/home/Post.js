import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { post } from "../../data/User";
import tw from "twrnc";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useDimensions } from "@react-native-community/hooks";

const Post = () => {
  const width = useDimensions().window.width;

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
                  style={tw.style(``, { width: width, height: width })}
                  source={{ uri: image }}
                />
              ))}
            </View>
          </ScrollView>
          <View style={tw`flex-row my-2 justify-between px-2`}>
            <View style={tw`flex-row`}>
              <TouchableOpacity style={tw`mr-2`}>
                <FontAwesome name="heart-o" color="white" size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={tw`mr-2`}>
                <FontAwesome name="comment-o" color="white" size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={tw`mr-2`}>
                <MaterialIcons name="send" color="white" size={30} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="bookmark" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <Text style={tw`text-white px-2`}>{user.caption}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Post;
