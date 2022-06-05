import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import axios from '../axios'
import tw from "twrnc";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignupScreen = ({ navigation }) => {
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });
  const signup = async() =>{
    try {
      const token = await (await axios.post('/signup', values)).data;
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home');
    } catch (error) {
      setError(error.response.data);
    }
  }
  return (
    <View style={tw.style(`justify-center items-center`, { flex: 1 })}>
      <View>
        <Image />
        <Text style={tw`font-bold text-2xl`}>Instagram</Text>
      </View>
      <Text style={tw`font-bold text-2xl text-gray-500 text-center px-2`}>
        Signup to see photos and videos from your friends
      </Text>
      {error && <Text style={tw`bg-red-500 rounded-md p-2 my-5 w-[80%] text-center font-bold text-white`}>{error}</Text>}
      <TextInput
        onChangeText={(email) => setValues({ ...values, email })}
        placeholder="Phone number, email or username"
        style={tw.style("p-2 my-3 bg-gray-300 rounded-2 w-[20rem]", {
          borderWidth: 1,
        })}
      />
      <TextInput
        onChangeText={(fullname) => setValues({ ...values, fullname })}
        placeholder="Full Name"
        style={tw.style("p-2 my-3 bg-gray-300 rounded-2 w-[20rem]", {
          borderWidth: 1,
        })}
      />
      <TextInput
        onChangeText={(username) => setValues({ ...values, username })}
        placeholder="Username"
        style={tw.style("p-2 my-3 bg-gray-300 rounded-2 w-[20rem]", {
          borderWidth: 1,
        })}
      />
      <TextInput
        onChangeText={(password) => setValues({ ...values, password })}
        style={tw.style("p-2 my-2 bg-gray-300  rounded-2 w-[20rem]", {
          borderWidth: 1,
        })}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TouchableOpacity onPress={signup} mode="contained" style={tw`w-[78%] rounded-2 my-1 py-3 items-center bg-blue-400`}>
        <Text style={tw`text-white font-bold`}> Signup </Text>
      </TouchableOpacity>
      <View style={tw`flex-row my-2`}>
        <Text>Already have account yet </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={tw`text-blue-500`}
          >
            login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
