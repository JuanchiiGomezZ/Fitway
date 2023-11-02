import { createSlice } from "@reduxjs/toolkit";

export const newExerciseSlice = createSlice({
  name: "newExercise",
  initialState: {
    reps: ["", "", ""],
    areValidReps: true,
    restTime: 0,
  },
  reducers: {
    setReps: (state, { payload }) => {
      state.reps = payload;
    },
    setRepsValidation: (state, { payload }) => {
      state.areValidReps = payload;
    },
    setRestTime: (state, { payload }) => {
      state.restTime = payload;
    },
    cleanNewExerciseState: (state) => {
      (state.reps = ["", "", ""]), (state.restTime = 0), (state.areValidReps = true);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReps, setRepsValidation, setRestTime, cleanNewExerciseState } = newExerciseSlice.actions;
