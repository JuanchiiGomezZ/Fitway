import React, { useEffect } from "react";

/* NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

/* HOOKS */
import { useSelector } from "react-redux";
import useAuthStore from "../hooks/redux/useAuthStore";

/* SCREENS */
import TabNavigator from "./TabNavigator";
import StartScreen from "../screens/start/Start";
import MyRoutinesScreen from "../screens/my-routines/MyRoutines";
import AllRoutinesScreen from "../screens/routines/Routines";
import BarCodeScannerScreen from "../helpers/BarCodeScannerScreen";
import Settings from "../screens/settings/Settings";
import ChangeLanguage from "../screens/settings/views/ChangeLanguage";
import TrainingMode from "../screens/training/Training";

const Stack = createNativeStackNavigator();
export default Navigation = () => {
  const { status } = useSelector((state) => state.auth);
  const { checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {status == "authenticated" ? (
          <>
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
            <Stack.Screen
              name="Training"
              component={TrainingMode}
              options={{
                animation: "slide_from_right",
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{
              animation: "default",
            }}
          />
        )}

        {/* NOT-AUTHENTICATED */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
