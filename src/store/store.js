import { configureStore } from "@reduxjs/toolkit";

/* SLICES */
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
