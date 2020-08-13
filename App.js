import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "./screens/SignIn";
import SignUp from './screens/SignUp';
import Home from './screens/Home';


const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Acasa"
    >
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="Register" component={SignUp} />
      <Stack.Screen name="Acasa" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
