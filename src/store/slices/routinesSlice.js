import { createSlice } from "@reduxjs/toolkit";

export const routinesSlice = createSlice({
  name: "userRoutines",
  initialState: {
    userRoutines: [],
    activeRoutineId: undefined,
    activeRoutineDetails: [],
    activeRoutineWorkouts: undefined,
    isLoading: false,
    error: null,
    trainingInProgressAlert: { state: false, workoutId: null },
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveRoutines: (state, { payload }) => {
      state.userRoutines = payload;
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.error = payload || null), (state.isLoading = false);
    },
    saveActiveRoutineId: (state, { payload }) => {
      state.activeRoutineId = payload;
    },
    saveActiveRoutineDetails: (state, { payload }) => {
      state.activeRoutineDetails = payload;
    },
    saveActiveRoutineWorkouts: (state, { payload }) => {
      state.activeRoutineWorkouts = payload;
    },
    setLoader: (state, { payload }) => {
      state.isLoading = false;
    },
    toggleTrainingInProgressAlert: (state, { payload }) => {
      if (state.trainingInProgressAlert.state) {
        state.trainingInProgressAlert = { state: false, workoutId: null };
      } else {
        state.trainingInProgressAlert = { state: true, workoutId: payload };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveRoutines,
  onChecking,
  onError,
  saveActiveRoutineId,
  saveActiveRoutineDetails,
  setLoader,
  saveActiveRoutineWorkouts,
  toggleTrainingInProgressAlert,
} = routinesSlice.actions;
