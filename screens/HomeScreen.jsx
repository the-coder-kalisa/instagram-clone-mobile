import { SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import { createContext, useEffect } from "react/cjs/react.production.min";
import Post from "../components/home/Post";
import Footer from "../components/home/Footer";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={tw.style(`andriod:pt-[${StatusBar.currentHeight}px] bg-black`, {flex: 1})}
    >
      <StatusBar />
      <Header />
      <Stories />
      <Post />
      <Footer navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
