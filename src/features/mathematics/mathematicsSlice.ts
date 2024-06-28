import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Operator_Types } from "./types";
import { calculate } from "./utils/calculate";
import { IRootState } from "../../app/store";

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

const incrementID = () => {
  ID = ID + 1;
};

interface MathematicsState {
  operators_list: TOperator[];
}

const MATHEMATICS_INITIAL_STATE: MathematicsState = {
  operators_list: [],
};

const mathematicsSlice = createSlice({
  name: "mathematicsSlice",
  initialState: MATHEMATICS_INITIAL_STATE,
  reducers: {
    addOperator: (state, action: PayloadAction<Operator_Types>) => {
      const new_operator: TOperator = {
        id: ID,
        input_1: 0,
        input_2: 0,
        operator_type: action.payload,
        currentOperatorOutput:
          action.payload === Operator_Types.DIVIDE ? undefined : 0,
      };

      incrementID();

      state.operators_list.push(new_operator);
    },
    updateFirstInput: (
      state,
      action: PayloadAction<{ id: TOperator["id"]; firstInputValue: number }>,
    ) => {
      state.operators_list = state.operators_list.map((item) => {
        if (item.id === action.payload.id) {
          const first_input_new_value = action.payload.firstInputValue;

          const currentOperatorOutput = calculate(
            first_input_new_value,
            item.input_2,
            item.operator_type,
          );

          return {
            ...item,
            input_1: first_input_new_value,
            currentOperatorOutput,
          };
        }
        return item;
      });
    },
    updateSecondInput: (
      state,
      action: PayloadAction<{ id: TOperator["id"]; secondInputValue: number }>,
    ) => {
      state.operators_list = state.operators_list.map((item) => {
        if (item.id === action.payload.id) {
          const second_input_new_value = action.payload.secondInputValue;

          const currentOperatorOutput = calculate(
            item.input_1,
            second_input_new_value,
            item.operator_type,
          );

          return {
            ...item,
            input_2: second_input_new_value,
            currentOperatorOutput,
          };
        }
        return item;
      });
    },
    deleteOperator: (state, action: PayloadAction<{ id: TOperator["id"] }>) => {
      state.operators_list = state.operators_list.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    copyOperator: (
      state,
      action: PayloadAction<{
        operator_type: Operator_Types;
        firstInputValue: number;
        secondInputValue: number;
        currentIndex: number;
      }>,
    ) => {
      const newId = ID;
      incrementID();

      const firstInputValue = action.payload.firstInputValue;
      const secondInputValue = action.payload.secondInputValue;
      const operatorType = action.payload.operator_type;

      const currentOperatorOutput = calculate(
        firstInputValue,
        secondInputValue,
        operatorType,
      );

      const newOperatorObj = {
        id: newId,
        operator_type: operatorType,
        input_1: firstInputValue,
        input_2: secondInputValue,
        currentOperatorOutput,
      };

      state.operators_list.splice(
        action.payload.currentIndex,
        0,
        newOperatorObj,
      );
    },
  },
});

export const {
  addOperator,
  updateFirstInput,
  updateSecondInput,
  deleteOperator,
  copyOperator,
} = mathematicsSlice.actions;

// Selectors
export const selectOperatorsList = (state: IRootState) =>
  state.mathematicsData.operators_list;

export default mathematicsSlice.reducer;
