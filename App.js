import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Slots from "./screens/Slots";
import Cal from "./screens/Calendar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acasa">
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Register" component={SignUp} />
        <Stack.Screen
          name="Acasa"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Slots" component={Slots} />
        <Stack.Screen name="Calendar" component={Cal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
