import { createSlice } from "@reduxjs/toolkit";
import sortByOrder from "../../helpers/sortByOrder";

export const trainingSlice = createSlice({
  name: "training",
  initialState: {
    numActiveExercise: 0,
    activeWorkout: [],
    activeExercise: undefined,
    activeWorkoutDetails: undefined,
    workoutLog: [[]],
    exerciseGif: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    onLoading: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveActiveWorkoutData: (state, { payload }) => {
      const { details, Exercises } = payload;
      const { numActiveExercise } = state;

      (state.activeWorkoutDetails = details),
        (state.activeWorkout = sortByOrder(Exercises.Exercises)),
        (state.activeExercise = Exercises.Exercises[numActiveExercise]),
        (state.isLoading = false);
    },
    handleChangeExercise: (state, { payload }) => {
      (state.activeExercise = state.activeWorkout[payload]), (state.numActiveExercise = payload);
    },
    setActiveExercise: (state, { payload }) => {
      (state.activeExercise = state.activeWorkout[payload]), (state.numActiveExercise = payload);
    },
    saveExercises: (state, { payload }) => {
      state.activeWorkout = payload;
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
    toggleExerciseGif: (state, { payload }) => {

        state.exerciseGif ? (state.exerciseGif = null) : (state.exerciseGif = payload);
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
  saveExercises,
  toggleExerciseGif,
} = trainingSlice.actions;
