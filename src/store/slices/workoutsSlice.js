import { createSlice } from "@reduxjs/toolkit";
import dataWorkouts from "../../screens/home/helpers/workoutDataTest.json";

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    workouts: dataWorkouts,
    isLoading: false,
    errorMessage: null,
  },
  reducers: {
    saveWorkouts: (state, { payload }) => {
      (state.isLoading = false), (state.routines = payload), (state.errorMessage = null);
    },
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.errorMessage = null);
    },

    onError: (state, { payload }) => {
      (state.isLoading = false), (state.errorMessage = payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveWorkouts, onChecking, onError } = workoutsSlice.actions;
