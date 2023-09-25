import { configureStore } from "@reduxjs/toolkit";

/* SLICES */
import { authSlice } from "./slices/authSlice";
import { routinesSlice } from "./slices/routinesSlice";
import { workoutsSlice } from "./slices/workoutsSlice";

const testMiddleware = (store) => (next) => (action) => {
  if (action.type == "auth/onLogout" && action.payload != undefined) {
    console.log(action.payload);
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    routines: routinesSlice.reducer,
    workouts: workoutsSlice.reducer,
  },
  middleware: [testMiddleware],
});
