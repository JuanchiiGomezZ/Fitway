import { createSlice } from "@reduxjs/toolkit";
import sortByOrder from "../../helpers/sortByOrder";
import workoutLogInitialState from "../../helpers/workoutLogInitialState";
import { storage } from "../../helpers/storage";

export const trainingSlice = createSlice({
  name: "training",
  initialState: {
    numActiveExercise: 0,
    activeWorkout: [],
    activeExercise: undefined,
    activeWorkoutDetails: undefined,
    workoutLog: null,
    exerciseGif: null,
    countdown: { state: false, restTime: null },
    isLoading: false,
    error: null,
  },
  reducers: {
    onLoading: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveActiveWorkoutData: (state, { payload }) => {
      const { details, Exercises } = payload;

      const sortedExercises = Exercises;
      const storedWorkoutId = storage.getString("workout_id_training");
      const storedWorkoutLog = storage.getString("workoutLog");
      (state.activeWorkoutDetails = details),
        (state.activeWorkout = sortedExercises),
        (state.activeExercise = sortedExercises[0]);
      if (storedWorkoutId == details.workoutId && storedWorkoutLog) {
        state.workoutLog = JSON.parse(storedWorkoutLog);
      } else {
        state.workoutLog = workoutLogInitialState(sortedExercises);
      }

      state.isLoading = false;
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
    handleLogChange: (state, { payload }) => {
      const { id, index, field, value } = payload;
      const newState = state.workoutLog;

      const indexExercise = newState.findIndex((item) => item.id === id);
      if (indexExercise !== -1) {
        newState[indexExercise].stats[index][field] = value;
      }
    },
    cleanWorkoutLog: (state, { payload }) => {
      storage.delete("workout_id_training"),
        storage.delete("workout_startDate_training"),
        storage.delete("workoutLog"),
        (state.workoutLog = null),
        (state.numActiveExercise = 0),
        (state.activeExercise = undefined),
        (state.activeWorkoutDetails = undefined);
    },
    setRestTime: (state, { payload }) => {
      const { exerciseId, newRestTime, index } = payload;

      const exerciseToUpdate = state.activeWorkout.find((exercise) => exercise.id === exerciseId);
      if (exerciseToUpdate) {
        if (exerciseToUpdate?.Exercises) {
          exerciseToUpdate.Exercises[index || 0].SupersetExercises[0].restTime = newRestTime;
        } else {
          exerciseToUpdate.WorkoutExercises[0].restTime = newRestTime;
        }
      }

      if (state.activeExercise.Exercises) {
        state.activeExercise.Exercises[index].SupersetExercises[0].restTime = newRestTime;
      } else {
        state.activeExercise.WorkoutExercises[0].restTime = newRestTime;
      }
    },
    setCountdown: (state, { payload }) => {
      state.countdown = payload;
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
  handleLogChange,
  cleanWorkoutLog,
  saveExercises,
  toggleExerciseGif,
  setCountdown,
  setRestTime,
} = trainingSlice.actions;
