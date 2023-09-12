import React from "react";

/* NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";

/* SCREENS */
import StartScreen from "../screens/start/index";

const Stack = createNativeStackNavigator();
export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* AUTHENTICATED */}
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigator}
          options={{
            animation: "default",
          }}
        />
        {/* NOT-AUTHENTICATED */}
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            animation: "default",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
