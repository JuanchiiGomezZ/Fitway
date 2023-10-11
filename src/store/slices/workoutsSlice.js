import { createSlice } from "@reduxjs/toolkit";

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    activeWorkoutDetails: [],
    activeWorkoutExercises: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    onChecking: (state, { payload }) => {
      (state.isLoading = true), (state.error = null);
    },
    saveActiveWorkoutExercises: (state, { payload }) => {
      (state.activeWorkoutDetails = {
        routineId: payload.routineId,
        workoutId: payload.id,
        name: payload.name,
      }),
        (state.activeWorkoutExercises = payload.SuperSets[0]
          ? {
              exercises: [...payload.Exercises, payload.SuperSets[0]],
            }
          : { exercises: [...payload.Exercises] }),
        (state.isLoading = false);
    },
    onError: (state, { payload }) => {
      console.log(payload), (state.isLoading = false), (state.error = payload || null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveActiveWorkoutExercises, onChecking, onError } = workoutsSlice.actions;
