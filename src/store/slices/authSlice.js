import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../../helpers/storage";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //"authenticated", "not-authenticated", "checking"
    user: {},
    error: null,
    isLoading: false,
  },
  reducers: {
    onChecking: (state) => {
      (state.status = "checking"), (state.isLoading = true);
    },
    onLogin: (state, { payload }) => {
      (state.status = "authenticated"), (state.user = payload), (state.isLoading = false);
    },
    onLogout: (state, { payload }) => {
      (state.status = "not-authenticated"), (state.user = {}), (state.errorMessage = payload), (state.isLoading = false);
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onChecking, clearErrorMessage } = authSlice.actions;
