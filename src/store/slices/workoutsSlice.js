import { createSlice } from "@reduxjs/toolkit";
import sortByOrder from "../../helpers/sortByOrder";

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workoutDetails: [],
    workoutExercises: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveWorkoutData: (state, { payload }) => {
      const { details, Exercises } = payload;
      (state.workoutDetails = details),
        (state.workoutExercises = Exercises),
        (state.isLoading = false);
    },
    saveWorkoutExercises: (state, { payload }) => {
      (state.workoutExercises = payload), (state.isLoading = false);
    },
    cleanWorkout: (state, { payload }) => {
      (state.workoutDetails = []), (state.workoutExercises = null);
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveWorkoutData, saveWorkoutExercises, onChecking, onError, cleanWorkout } =
  workoutsSlice.actions;
