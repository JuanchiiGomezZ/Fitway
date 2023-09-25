import { createSlice } from "@reduxjs/toolkit";
import dataRoutine from "../../screens/my-routines/helpers/routinesTestData.json";

export const routinesSlice = createSlice({
  name: "routines",
  initialState: {
    routines: dataRoutine,
    isLoading: false,
    error: null,
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveRoutines: (state, { payload }) => {
      (state.isLoading = false), (state.routines = payload);
    },
    onError: (state, { payload }) => {
      (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveRoutines, onChecking, onError } = routinesSlice.actions;
