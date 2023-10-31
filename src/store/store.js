import { configureStore } from "@reduxjs/toolkit";

/* SLICES */
import { authSlice } from "./slices/authSlice";
import { routinesSlice } from "./slices/routinesSlice";
import { workoutsSlice } from "./slices/workoutsSlice";
import { exercisesSlice } from "./slices/exercisesSlice";
import { newExerciseSlice } from "./slices/newExerciseSlice";

const testMiddleware = (store) => (next) => (action) => {
  if (action.type == "auth/onLogout" && action.payload != undefined) {
    console.log(action.payload);
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    userRoutines: routinesSlice.reducer,
    workouts: workoutsSlice.reducer,
    exercises: exercisesSlice.reducer,
    newExercise: newExerciseSlice.reducer,
    
  },
  middleware: [testMiddleware],
});
