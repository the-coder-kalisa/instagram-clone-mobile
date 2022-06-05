import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Button } from "react-native-paper";
import axios from '../axios'

const LoginScreen = ({ navigation }) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null)
  const login = async() =>{
    try {
      const token = await (await axios.post('/login', values)).data;
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home')
    } catch (error) {
      setError(error.response.data);
    }
  }
  return (
    <View style={tw.style(`justify-center items-center`, { flex: 1 })}>
      <Text style={tw`font-bold text-2xl`}>Instagram</Text>
      {error && <Text style={tw`font-bold bg-red-500 w-[75%] text-center text-white p-1 my-3 text-lg rounded-md`}>{error}</Text>}
      <TextInput
        onChangeText={(email) => setValues({ ...values, email })}
        placeholder="Phone number, email or username"
        style={tw.style("p-2 my-3 bg-gray-300 rounded-2 w-[20rem]", {
          borderWidth: 1,
        })}
      />
      <TextInput
        onChangeText={(password) => setValues({ ...values, password })}
        style={tw.style("p-2 my-2 bg-gray-300  rounded-2 w-[20rem]", {
          borderWidth: 1,
        })}
        placeholder="Password"
      />
      <Text style={tw`my-3`}>Forgot your password?</Text>
      <Button mode="contained" onPress={login} style={tw`w-[78%] bg-blue-400`}>
        Login
      </Button>
      <View style={tw`flex-row my-2`}>
        <Text>Not have account yet </Text>
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={tw`text-blue-500`}
        >
          Signup
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
