import { createSlice } from "@reduxjs/toolkit";

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
      (state.workoutDetails = payload.details),
        (state.workoutExercises = payload.Exercises.Exercises),
        (state.isLoading = false);
    },
    saveWorkoutExercises: (state, { payload }) => {
      (state.workoutExercises =  payload ), (state.isLoading = false);
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveWorkoutData, saveWorkoutExercises, onChecking, onError } = workoutsSlice.actions;
