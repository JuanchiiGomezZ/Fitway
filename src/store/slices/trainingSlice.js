import { createSlice } from "@reduxjs/toolkit";

export const trainingSlice = createSlice({
  name: "training",
  initialState: {
    numActiveExercise: 0,
    activeSet: 0,
    activeWorkoutExercises: [],
    activeExercise: undefined,
    activeWorkoutDetails: undefined,
    activeWorkoutLogs: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    onLoading: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveActiveWorkoutData: (state, { payload }) => {
      (state.activeWorkoutExercises = payload.details),
        (state.activeWorkoutExercises = payload.Exercises),
        (state.activeExercise = payload.Exercises.Exercises[state.numActiveExercise]),
        (state.isLoading = false);
    },
    handleChangeExercise: (state, { payload }) => {
      (state.activeExercise = state.activeWorkoutExercises.Exercises[payload]),
        (state.numActiveExercise = payload),
        (state.activeSet = 0);
    },
    setActiveExercise: (state, { payload }) => {
      (state.activeExercise = state.activeWorkoutExercises.Exercises[payload]),
        (state.numActiveExercise = payload);
    },
    setActiveSet: (state, { payload }) => {
      state.activeSet = payload;
    },
    setWorkoutLog: (state, { payload }) => {
      state.activeWorkoutLogs = payload;
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveActiveWorkoutData,
  onLoading,
  setActiveExercise,
  setActiveSet,
  handleChangeExercise,
  setWorkoutLog,
} = trainingSlice.actions;
