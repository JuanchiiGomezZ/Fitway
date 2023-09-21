import { configureStore } from "@reduxjs/toolkit";

/* SLICES */
import { authSlice } from "./slices/authSlice";
import { routinesSlice } from "./slices/routinesSlice";
import { workoutsSlice } from "./slices/workoutsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    routines: routinesSlice.reducer,
    workouts: workoutsSlice.reducer,
  },
});
