import { configureStore } from "@reduxjs/toolkit"

import mathematicsReducer from "../features/mathematics/mathematicsSlice"

const store = configureStore({
  reducer: {
    mathematicsData: mathematicsReducer,
  },
})

export type IRootState = ReturnType<typeof store.getState>
export default store
