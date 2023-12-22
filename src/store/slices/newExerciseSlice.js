import { createSlice } from "@reduxjs/toolkit";

export const newExerciseSlice = createSlice({
  name: "newExercise",
  initialState: {
    reps: ["", "", ""],
    areValidReps: true,
    resTime: 0,
  },
  reducers: {
    setReps: (state, { payload }) => {
      state.reps = payload;
    },
    setRepsValidation: (state, { payload }) => {
      state.areValidReps = payload;
    },
    setRestTime: (state, { payload }) => {
      state.resTime = payload;
    },
    cleanNewExerciseState: (state) => {
      (state.reps = ["", "", ""]), (state.resTime = 0), (state.areValidReps = true);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReps, setRepsValidation, setRestTime, cleanNewExerciseState } = newExerciseSlice.actions;
