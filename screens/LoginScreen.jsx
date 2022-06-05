import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [values, setValues] = useState({ email: "", password: "" });
  return (
    <View style={tw.style(`justify-center items-center`, { flex: 1 })}>
      <Text style={tw`font-bold text-2xl`}>Instagram</Text>
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
      <Button mode="contained" style={tw`w-[78%] bg-blue-400`}>
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
