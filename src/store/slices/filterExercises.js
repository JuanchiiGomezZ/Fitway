import { createSlice } from "@reduxjs/toolkit";

export const filterExercisesSlice = createSlice({
  name: "filterExercises",
  initialState: {
    isLoading: false,
    error: null,

    musclesFilter: [],
    elementsFilter: [],
    exerciseTypeFilter: null,
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload || null);
    },
    onSuccess: (state, { payload }) => {
      (state.isLoading = false), (state.error = null);
    },

    setMusclesFilter: (state, { payload }) => {
      state.musclesFilter = payload;
    },
    setElementsFilter: (state, { payload }) => {
      state.elementsFilter = payload;
    },
    setExerciseTypeFilter: (state, { payload }) => {
      state.exerciseTypeFilter = payload;
    },
    clearFilters: (state, { payload }) => {
      state.musclesFilter = [];
      state.elementsFilter = [];
      state.exerciseTypeFilter = "";
    },
  },
});

export const {
  onChecking,
  onError,
  onSuccess,
  setMusclesFilter,
  setElementsFilter,
  setExerciseTypeFilter,
  clearFilters,
} = filterExercisesSlice.actions;
