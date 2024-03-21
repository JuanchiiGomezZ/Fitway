import React, { useEffect } from "react";

/* NAVIGATION */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

/* HOOKS */
import { useSelector } from "react-redux";
import useAuthStore from "../hooks/redux/useAuthStore";
import useRoutinesStore from "../hooks/redux/useRoutinesStore";
import { welcomeStorage } from "../helpers/storage";

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
import ExerciseDetails from "../screens/exerciseDetails/ExerciseDetails";
import TrainingsLog from "../screens/trainingsLog/TrainingsLog";
import AddExerciseDetails from "../screens/addExerciseDetails/AddExerciseDetails";
import WorkoutLogDetails from "../screens/workoutLogDetails.jsx/WorkoutLogDetails";
import TrainingFinished from "../screens/trainingFinished/TrainingFinished";
import EditExercise from "../screens/editExercise/EditExercise";
import Welcome_1 from "../screens/welcome/Welcome_1";
import Welcome_2 from "../screens/welcome/Welcome_2";
import NewWorkoutModal from "../screens/home/components/NewWorkoutModal";
import QrModal from "../components/QrModal";
import BottomSheetMenuWorkout from "../screens/home/components/BottomSheetMenuWorkout";
import ExerciseTypesModal from "../screens/createExercise/components/ExerciseTypesModal";
import BottomsheetImage from "../screens/createExercise/components/BottomsheetImage";
import BottomSheetRoutine from "../screens/my-routines/components/BottomSheetRoutine";
import NewRoutineModal from "../screens/routines/components/NewRoutineModal";
import DraggableExercisesList from "../screens/training/components/exercisesModal/DraggableExercisesList";
import BottomSheetExercise from "../screens/workout/components/BottomSheetExercise";
import CreateSupersetModal from "../screens/workout/components/CreateSupersetModal";
import ConfirmationAlert from "../components/ConfirmationAlert";
import PickerModal from "../screens/createExercise/components/PickerModal";
import ReorderExercises from "../screens/reorderExercises/ReorderExercises";

import muscles from "../data/muscles.json";
import elements from "../data/elements.json";
import BottomSheetRestTimerConfig from "../screens/training/components/BottomSheetRestTimerConfig";
import FilterExerciseBottomSheet from "../screens/addExercise/AllExercises/components/filterExercise/FilterExerciseBottomSheet";
import FilterRoutineBottomSheet from "../screens/routines/components/FilterRoutineBottomSheet";
import PickerMultipleModal from "../screens/addExercise/AllExercises/components/PickerMultipleModal";

const Stack = createNativeStackNavigator();
export default Navigation = () => {
  const { status } = useSelector((state) => state.auth);
  const { refreshAuthToken } = useAuthStore();
  const { getRoutines } = useRoutinesStore();

  // useEffect(() => {
  //   refreshAuthToken();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {status == "authenticated" ? (
          <>
            {/* SCREENS */}
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
            <Stack.Screen
              name="ExerciseDetails"
              component={ExerciseDetails}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="AddExerciseDetails"
              component={AddExerciseDetails}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="TrainingsLog"
              component={TrainingsLog}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="WorkoutLogDetails"
              component={WorkoutLogDetails}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="TrainingFinished"
              component={TrainingFinished}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="EditExercise"
              component={EditExercise}
              options={{
                animation: "default",
              }}
            />

            {/* MODALS */}
            <Stack.Screen
              name="NewWorkoutModal"
              component={NewWorkoutModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="QrModal"
              component={QrModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="BottomSheetWorkout"
              component={BottomSheetMenuWorkout}
              options={{
                presentation: "transparentModal",
                animation: "fade_from_bottom",
              }}
            />
            <Stack.Screen
              name="ExerciseTypesModal"
              component={ExerciseTypesModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="MusclesModal"
              component={PickerModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
              initialParams={{ title: "Muscle", data: muscles }}
            />
            <Stack.Screen
              name="ElementsModal"
              component={PickerModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
              initialParams={{ title: "Elements", data: elements }}
            />
            <Stack.Screen
              name="BottomSheetImage"
              component={BottomsheetImage}
              options={{
                presentation: "transparentModal",
                animation: "fade_from_bottom",
              }}
            />
            <Stack.Screen
              name="BottomSheetRoutine"
              component={BottomSheetRoutine}
              options={{
                presentation: "transparentModal",
                animation: "fade_from_bottom",
              }}
            />
            <Stack.Screen
              name="ExercisesModal"
              component={DraggableExercisesList}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="NewRoutineModal"
              component={NewRoutineModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="BottomSheetExercise"
              component={BottomSheetExercise}
              options={{
                presentation: "transparentModal",
                animation: "fade_from_bottom",
              }}
            />
            <Stack.Screen
              name="CreateSupersetModal"
              component={CreateSupersetModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="ConfirmationAlert"
              component={ConfirmationAlert}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="BottomSheetRestTimerConfig"
              component={BottomSheetRestTimerConfig}
              options={{
                presentation: "transparentModal",
                animation: "fade_from_bottom",
              }}
            />
            <Stack.Screen
              name="FilterExerciseBottomSheet"
              component={FilterExerciseBottomSheet}
              options={{
                animation: "slide_from_bottom",
              }}
            />
            <Stack.Screen
              name="FilterRoutineBottomSheet"
              component={FilterRoutineBottomSheet}
              options={{
                presentation: "transparentModal",
                animation: "fade_from_bottom",
              }}
            />
            <Stack.Screen
              name="PickerMultipleModal"
              component={PickerMultipleModal}
              options={{
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
          </>
        ) : (
          <>
            {/* NOT-AUTHENTICATED */}
            {!welcomeStorage.getBoolean("welcome") && (
              <>
                <Stack.Screen
                  name="Welcome_1"
                  component={Welcome_1}
                  options={{
                    animation: "slide_from_right",
                  }}
                />
                <Stack.Screen
                  name="Welcome_2"
                  component={Welcome_2}
                  options={{
                    animation: "slide_from_right",
                  }}
                />
              </>
            )}

            <Stack.Screen
              name="StartScreen"
              component={StartScreen} //ReorderExercises
              options={{
                animation: "default",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
