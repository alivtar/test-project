import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from "react-redux";
import mathematicsReducer from "../features/mathematics/mathematicsSlice";

const store = configureStore({
  reducer: {
    mathematicsData: mathematicsReducer,
  },
});

// Infer the `TRootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use these hooks throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<TRootState>();

export type IRootState = ReturnType<typeof store.getState>;
export default store;
