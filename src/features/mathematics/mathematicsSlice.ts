import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Operator_Types } from "./types";

export type TOperatorsList = {
  operator_type: Operator_Types;
  input_1: number;
  input_2: number;
};

interface MathematicsState {
  operators_list: TOperatorsList[];
}

const MATHEMATICS_INITIAL_STATE: MathematicsState = {
  operators_list: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: MATHEMATICS_INITIAL_STATE,
  reducers: {
    // addUser: (state, action: PayloadAction<UserType>) => {
    //   state.list.push(action.payload)
    // },
    // updateUser: (
    //   state,
    //   action: PayloadAction<{ id: UserType["id"]; newUsername: string }>,
    // ) => {
    //   state.list = state.list.map(user => {
    //     if (user.id === action.payload.id) {
    //       return {
    //         ...user,
    //         username: action.payload.newUsername,
    //       }
    //     }
    //     return user
    //   })
    // },
    // deleteUser: (state, action: PayloadAction<{ userId: UserType["id"] }>) => {
    //   state.list = state.list.filter(user => user.id !== action.payload.userId)
    // },
  },
});

// export const { addUser, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
