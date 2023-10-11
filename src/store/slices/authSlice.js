import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //"authenticated", "not-authenticated", "checking"
    user: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    onChecking: (state) => {
      (state.status = "checking"), (state.isLoading = true);
    },
    onLogin: (state, { payload }) => {
      (state.status = "authenticated"), (state.user = payload), (state.isLoading = false);
    },
    onLogout: (state, { payload }) => {
      (state.status = "not-authenticated"),
        (state.user = {}),
        (state.error = payload || null),
        (state.isLoading = false),
        console.log(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onChecking, clearErrorMessage } = authSlice.actions;
