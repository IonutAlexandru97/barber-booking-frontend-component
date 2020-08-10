import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SignIn}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}