import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Footer = ({navigation}) => {
  const [show, setShow] = useState(false);
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.navigate('Login')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={tw`flex-row justify-between`}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="home" size={25} color={"white"} />
      </TouchableOpacity>
      <View style={tw`relative`}>
        {show && (
          <View
            style={tw`absolute px-2 flex-col w-24 bottom-8 right-1 bg-white`}
          >
            <TouchableOpacity style={tw`my-2`}>
              <Text>View profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout} style={tw`my-2`}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity>
          <MaterialCommunityIcons
            onPress={() => setShow(!show)}
            name="account"
            color="white"
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
