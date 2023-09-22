import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //"authenticated", "not-authenticated", "checking"
    user: {},
    errorMessage: undefined,
    isLoading: false,
  },
  reducers: {
    onChecking: (state) => {
      (state.status = "checking"), (state.user = {}), (state.errorMessage = undefined), (state.isLoading = true);
    },
    onLogin: (state, { payload }) => {
      (state.status = "authenticated"), (state.user = payload), (state.errorMessage = undefined), (state.isLoading = false);
    },
    onLogout: (state, { payload }) => {
      (state.status = "not-authenticated"), (state.user = {}), (state.errorMessage = payload), (state.isLoading = false);
    },
    clearErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onChecking, clearErrorMessage } = authSlice.actions;
