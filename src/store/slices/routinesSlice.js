import { createSlice } from "@reduxjs/toolkit";
import dataRoutine from "../../screens/my-routines/helpers/routinesTestData.json";

export const routinesSlice = createSlice({
  name: "routines",
  initialState: {
    routines: dataRoutine,
    isLoading: false,
    errorMessage: null,
  },
  reducers: {
    saveRoutines: (state, { payload }) => {
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
export const { saveRoutines, onChecking, onError } = routinesSlice.actions;
