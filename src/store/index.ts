import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import CKPreducer from "./slices/CKPSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    CKP: CKPreducer,
  },
});
store.subscribe(() => {
  localStorage.setItem("Gameprogress", JSON.stringify(store.getState().CKP));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
