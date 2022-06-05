import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import SignupScreen from "./screens/SignupScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    const getData = () => {
      try {
        setToken(AsyncStorage.getItem("token"));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <NavigationContainer>
      {token === undefined ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
