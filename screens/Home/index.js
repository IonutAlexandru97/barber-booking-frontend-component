import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Services from "../Services";

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Servicii" component={Services} />
    </Tab.Navigator>
  );
}
