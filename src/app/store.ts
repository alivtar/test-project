import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mathematicsReducer from "../features/mathematics/mathematicsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mathematicsData: mathematicsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

// // Infer the `TRootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
export { persistor };
