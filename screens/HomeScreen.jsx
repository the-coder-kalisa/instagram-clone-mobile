import { SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import { useState, useEffect } from "react";
import Post from "../components/home/Post";
import Footer from "../components/home/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../axios";
const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let token = await AsyncStorage.getItem('token')
      if (!(await AsyncStorage.getItem("token"))) {
        navigation.navigate("Login");
      }
      try {
       let user = await (await axios.post('/getData', {token})).data;
       setUser(user)
      } catch (error) {
        console.log(error.response)
      }
    }
    fetchData();
  }, []);
  return (
    <SafeAreaView
      style={tw.style(`andriod:pt-[${StatusBar.currentHeight}px] bg-black`, {
        flex: 1,
      })}
    >
      <StatusBar />
      <Header />
      <Stories />
      <Post />
      <Footer user={user} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
