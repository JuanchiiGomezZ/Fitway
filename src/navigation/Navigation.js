import React, { useEffect } from "react";

/* NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

/* HOOKS */
import { useSelector } from "react-redux";
import useAuthStore from "../hooks/redux/useAuthStore";
import useRoutinesStore from "../hooks/redux/useRoutinesStore";

/* SCREENS */
import TabNavigator from "./TabNavigator";
import StartScreen from "../screens/start/Start";
import MyRoutinesScreen from "../screens/my-routines/MyRoutines";
import AllRoutinesScreen from "../screens/routines/Routines";
import BarCodeScannerScreen from "../helpers/BarCodeScannerScreen";
import SettingsScreen from "../screens/settings/Settings";
import ChangeLanguageScreen from "../screens/settings/views/ChangeLanguage";
import TrainingScreen from "../screens/training/Training";
import WorkoutScreen from "../screens/workout/Workout";
import CreateExercise from "../screens/createExercise/CreateExercise";
import CreateExerciseSecond from "../screens/createExerciseSecond/CreateExerciseSecond";
import AddExercise from "../screens/addExercise/AddExercise";

const Stack = createNativeStackNavigator();
export default Navigation = () => {
  const { status } = useSelector((state) => state.auth);
  const { refreshAuthToken } = useAuthStore();
  const { getRoutines } = useRoutinesStore();
  const { activeRoutineId } = useSelector((state) => state.userRoutines);

  useEffect(() => {
    refreshAuthToken();
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
              component={SettingsScreen}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="ChangeLanguage"
              component={ChangeLanguageScreen}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Training"
              component={TrainingScreen}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Workout"
              component={WorkoutScreen}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="CreateExercise"
              component={CreateExercise}
              options={{
                animation: "slide_from_bottom",
              }}
            />
            <Stack.Screen
              name="CreateExerciseSecond"
              component={CreateExerciseSecond}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="AddExercise"
              component={AddExercise}
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
