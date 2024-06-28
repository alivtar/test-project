import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Operator_Types } from "./types";

export type TOperator = {
  readonly id: number;
  operator_type: Operator_Types;
  input_1: number;
  input_2: number;
  currentOperatorOutput: number | undefined;
};

// to generate and track items' IDs
// TODO: update this id when reading from localstorage
let ID: number = 1;

interface MathematicsState {
  operators_list: TOperator[];
}

const MATHEMATICS_INITIAL_STATE: MathematicsState = {
  operators_list: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: MATHEMATICS_INITIAL_STATE,
  reducers: {
    addOperator: (state, action: PayloadAction<Operator_Types>) => {
      const new_operator: TOperator = {
        id: ID,
        input_1: 0,
        input_2: 0,
        operator_type: action.payload,
        currentOperatorOutput: 0,
      };

      ID = ID + 1;

      state.operators_list.push(new_operator);
    },
    updateFirstInput: (
      state,
      action: PayloadAction<{ id: TOperator["id"]; firstInputValue: number }>,
    ) => {
      state.operators_list = state.operators_list.map((item) => {
        if (item.id === action.payload.id) {
          const first_input_new_value = action.payload.firstInputValue;

          return {
            ...item,
            input_1: first_input_new_value,
            currentOperatorOutput: first_input_new_value + item.input_2,
          };
        }
        return item;
      });
    },
    updateSecondInput: (
      state,
      action: PayloadAction<{ id: TOperator["id"]; secondInputValue: number }>,
    ) => {
      const second_input_new_value = action.payload.secondInputValue;

      state.operators_list = state.operators_list.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            input_2: second_input_new_value,
            currentOperatorOutput: item.input_1 + second_input_new_value,
          };
        }
        return item;
      });
    },
    // deleteUser: (state, action: PayloadAction<{ userId: UserType["id"] }>) => {
    //   state.list = state.list.filter(user => user.id !== action.payload.userId)
    // },
  },
});

export const {
  addOperator,
  updateFirstInput,
  updateSecondInput,
  // deleteUser
} = usersSlice.actions;

export default usersSlice.reducer;
