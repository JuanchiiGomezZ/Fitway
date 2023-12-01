import { createSlice } from "@reduxjs/toolkit";

export const trainingSlice = createSlice({
  name: "training",
  initialState: {
    numActiveExercise: 0,
    activeWorkoutExercises: [],
    activeExercise: undefined,
    activeWorkoutDetails: undefined,
    workoutLog: [[]],
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
        (state.numActiveExercise = payload);
    },
    setActiveExercise: (state, { payload }) => {
      (state.activeExercise = state.activeWorkoutExercises.Exercises[payload]),
        (state.numActiveExercise = payload);
    },
    updateWorkoutLog: (state, { payload }) => {
      const { index, reps, weight, done } = payload;
      const { numActiveExercise, workoutLog } = state;

      if (!workoutLog[numActiveExercise]) {
        workoutLog[numActiveExercise] = [];
      }

      if (!workoutLog[numActiveExercise][index]) {
        workoutLog[numActiveExercise][index] = {};
      }

      workoutLog[numActiveExercise][index].reps = reps;
      workoutLog[numActiveExercise][index].weight = weight;
      workoutLog[numActiveExercise][index].done = done;
    },
    updateWorkoutLogReps: (state, { payload }) => {
      const { index, reps, done } = payload;
      const { numActiveExercise, workoutLog } = state;

      if (!workoutLog[numActiveExercise]) {
        workoutLog[numActiveExercise] = [];
      }

      if (!workoutLog[numActiveExercise][index]) {
        workoutLog[numActiveExercise][index] = {};
      }

      workoutLog[numActiveExercise][index].reps = reps;
      workoutLog[numActiveExercise][index].done = done;
    },
    updateWorkoutLogWeight: (state, { payload }) => {
      const { index, weight, done } = payload;
      const { numActiveExercise, workoutLog } = state;

      if (!workoutLog[numActiveExercise]) {
        workoutLog[numActiveExercise] = [];
      }

      if (!workoutLog[numActiveExercise][index]) {
        workoutLog[numActiveExercise][index] = {};
      }

      workoutLog[numActiveExercise][index].weight = weight;
      workoutLog[numActiveExercise][index].done = done;
    },
    cleanWorkoutLog: (state, { payload }) => {
      (state.workoutLog = [[]]), (state.numActiveExercise = 0);
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
  handleChangeExercise,
  updateWorkoutLog,
  updateWorkoutLogWeight,
  updateWorkoutLogReps,
  cleanWorkoutLog,
} = trainingSlice.actions;
