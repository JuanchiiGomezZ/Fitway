import { createSlice } from "@reduxjs/toolkit";
import dataWorkouts from "../../screens/home/helpers/workoutDataTest.json";

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workouts: dataWorkouts,
    isLoading: false,
    error: null,
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveWorkouts: (state, { payload }) => {
      (state.isLoading = false), (state.workouts = payload);
    },
    onError: (state, { payload }) => {
      (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveWorkouts, onChecking, onError } = workoutsSlice.actions;
