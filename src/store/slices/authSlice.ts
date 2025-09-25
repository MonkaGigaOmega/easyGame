import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  user: { email: string };
}

const initialState: AuthState = {
  isAuth: false,
  user: { email: "Не указан" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: { email: string } }>) => {
      state.isAuth = true;
      state.user = action.payload.user;
    },
    logout: state => {
      state.isAuth = false;
      state.user = { email: "Не указан" };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
