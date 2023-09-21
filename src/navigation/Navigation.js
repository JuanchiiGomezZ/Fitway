import React from "react";

/* NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

/* SCREENS */
import TabNavigator from "./TabNavigator";
import StartScreen from "../screens/start/index";
import MyRoutinesScreen from "../screens/my-routines/index";
import AllRoutinesScreen from "../screens/routines/index";
import BarCodeScannerScreen from "../helpers/BarCodeScannerScreen";
import Settings from "../screens/settings";
import ChangeLanguage from "../screens/settings/views/ChangeLanguage";

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
          name="MyRoutines"
          component={MyRoutinesScreen}
          options={{
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="AllRoutines"
          component={AllRoutinesScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="BarCodeScanner"
          component={BarCodeScannerScreen}
          options={{
            animation: "slide_from_left",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="ChangeLanguage"
          component={ChangeLanguage}
          options={{
            animation: "slide_from_right",
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
