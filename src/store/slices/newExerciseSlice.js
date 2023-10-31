import { createSlice } from "@reduxjs/toolkit";

export const newExerciseSlice = createSlice({
  name: "newExercise",
  initialState: {
    newExerciseData: null,
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
    saveNewExerciseData: (state, { payload }) => {
      state.newExerciseData = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReps, setRepsValidation, setRestTime, saveNewExerciseData } =
  newExerciseSlice.actions;
