import React from "react";

/* NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

/* SCREENS */
import TabNavigator from "./TabNavigator";
import StartScreen from "../screens/start/index";
import RoutineScreen from "../screens/routines/index";

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
        <Stack.Screen
          name="Routines"
          component={RoutineScreen}
          options={{
            animation: "slide_from_bottom",
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
