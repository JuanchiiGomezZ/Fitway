import { createSlice } from "@reduxjs/toolkit";
import sortByOrder from "../../helpers/sortByOrder";
import workoutLogInitialState from "../../helpers/workoutLogInitialState";
import { storage } from "../../helpers/storage";

export const trainingSlice = createSlice({
  name: "training",
  initialState: {
    numActiveExercise: 0,
    trainingExercises: [],
    activeTrainingExercise: undefined,
    activeTrainingDetails: undefined,
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
    saveActiveTrainingData: (state, { payload }) => {
      const { details, Exercises } = payload;

      const sortedExercises = Exercises;
      const storedWorkoutId = storage.getString("workout_id_training");
      const storedWorkoutLog = storage.getString("workoutLog");

      (state.activeTrainingDetails = details),
        (state.trainingExercises = sortedExercises),
        (state.activeTrainingExercise = sortedExercises[0]);
      if (storedWorkoutId == details.workoutId && storedWorkoutLog) {
        state.workoutLog = JSON.parse(storedWorkoutLog);
      } else {
        state.workoutLog = workoutLogInitialState(sortedExercises);
      }

      state.isLoading = false;
    },
    handleChangeExercise: (state, { payload }) => {
      (state.activeTrainingExercise = state.trainingExercises[payload]),
        (state.numActiveExercise = payload);
    },
    setActiveExercise: (state, { payload }) => {
      (state.activeTrainingExercise = state.trainingExercises[payload]),
        (state.numActiveExercise = payload);
    },
    saveExercises: (state, { payload }) => {
      state.trainingExercises = payload;
    },
    handleLogChange: (state, { payload }) => {
      const { id, index, field, value } = payload;
      const newState = state.workoutLog;

      const indexExercise = newState.findIndex((item) => item.id === id);
      if (indexExercise !== -1) {
        newState[indexExercise].stats[index][field] = value;
      }
    },
    cleanTrainingLog: (state, { payload }) => {
      storage.delete("workout_id_training"),
        storage.delete("workout_startDate_training"),
        storage.delete("workoutLog"),
        (state.workoutLog = null),
        (state.numActiveExercise = 0),
        (state.activeTrainingExercise = undefined),
        (state.activeTrainingDetails = undefined);
    },
    setRestTime: (state, { payload }) => {
      const { exerciseId, newRestTime, index } = payload;

      const exerciseToUpdate = state.trainingExercises.find(
        (exercise) => exercise.id === exerciseId,
      );
      if (exerciseToUpdate) {
        if (exerciseToUpdate?.Exercises) {
          exerciseToUpdate.Exercises[index || 0].SupersetExercise.restTime = newRestTime;
        } else {
          exerciseToUpdate.WorkoutExercise.restTime = newRestTime;
        }
      }

      if (state.activeTrainingExercise.Exercises) {
        state.activeTrainingExercise.Exercises[index].SupersetExercise.restTime = newRestTime;
      } else {
        state.activeTrainingExercise.WorkoutExercise.restTime = newRestTime;
      }
    },
    setCountdown: (state, { payload }) => {
      state.countdown = payload;
    },
    toggleExerciseGif: (state, { payload }) => {
      state.exerciseGif ? (state.exerciseGif = null) : (state.exerciseGif = payload);
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload);
    },
    onSuccessfulRequest: (state, { payload }) => {
      (state.isLoading = false), (state.error = null);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveActiveTrainingData,
  onLoading,
  setActiveExercise,
  handleChangeExercise,
  handleLogChange,
  cleanTrainingLog,
  saveExercises,
  toggleExerciseGif,
  setCountdown,
  setRestTime,
  onSuccessfulRequest,
  onError,
} = trainingSlice.actions;
