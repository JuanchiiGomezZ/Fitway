import { createSlice } from "@reduxjs/toolkit";

export const newExerciseSlice = createSlice({
  name: "newExercise",
  initialState: {
    exerciseData: null,
    reps: [""],
    areValidReps: true,
  },
  reducers: {
    setReps: (state, { payload }) => {
      state.reps = payload;
    },
    setRepsValidation: (state, { payload }) => {
      state.areValidReps = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReps, setRepsValidation } = newExerciseSlice.actions;
