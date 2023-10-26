import { createSlice } from "@reduxjs/toolkit";

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    activeWorkoutDetails: [],
    activeWorkoutExercises: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveActiveWorkoutExercisesData: (state, { payload }) => {
      (state.activeWorkoutDetails = payload.details),
        (state.activeWorkoutExercises = payload.exercises),
        (state.isLoading = false);
    },
    saveActiveWorkoutExercises: (state, { payload }) => {
      (state.activeWorkoutExercises = { exercises: payload }), (state.isLoading = false);
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveActiveWorkoutExercisesData, saveActiveWorkoutExercises, onChecking, onError } =
  workoutsSlice.actions;
