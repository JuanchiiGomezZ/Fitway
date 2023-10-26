import { createSlice } from "@reduxjs/toolkit";

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    userExercises: undefined,
    activeExerciseDetail: undefined,
    isLoading: false,
    error: null,
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveUserExercises: (state, { payload }) => {
      (state.userExercises = payload), (state.isLoading = false), (state.error = null);
    },
    saveExerciseDetail: (state, { payload }) => {
      (state.activeExerciseDetail = payload), (state.isLoading = false), (state.error = null);
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUserExercises, onChecking, onError, saveExerciseDetail } =
  exercisesSlice.actions;
