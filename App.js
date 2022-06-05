import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import SignupScreen from "./screens/SignupScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  const [token, setToken] = useState(null);
  const getData = async () => {
    try {
      setToken(await AsyncStorage.getItem("token"));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(token)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        {token ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            {token && <Stack.Screen name="Home" component={HomeScreen} />}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
