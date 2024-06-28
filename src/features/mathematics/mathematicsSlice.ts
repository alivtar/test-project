import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Operator_Types } from "./types";
import { calculate } from "./utils/calculate";
import { type IRootState } from "../../app/store";
import { writeOperatorsListToStorage } from "./utils/storage";
import { monotonicFactory } from "ulid";

export type TOperator = {
  readonly id: string;
  operator_type: Operator_Types;
  input_1: number;
  input_2: number;
  currentOperatorOutput: number | undefined;
};

const ulid = monotonicFactory();

const generateId = (): string => {
  return ulid(150000);
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
    overrideOperatorsList: (state, action: PayloadAction<TOperator[]>) => {
      console.log("Inside reducer", action.payload);
      state.operators_list = action.payload;
    },
    addOperator: (state, action: PayloadAction<Operator_Types>) => {
      const new_operator: TOperator = {
        id: generateId(),
        input_1: 0,
        input_2: 0,
        operator_type: action.payload,
        currentOperatorOutput:
          action.payload === Operator_Types.DIVIDE ? undefined : 0,
      };

      state.operators_list.push(new_operator);
      writeOperatorsListToStorage(state.operators_list);
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

      writeOperatorsListToStorage(state.operators_list);
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

      writeOperatorsListToStorage(state.operators_list);
    },
    deleteOperator: (state, action: PayloadAction<{ id: TOperator["id"] }>) => {
      state.operators_list = state.operators_list.filter(
        (item) => item.id !== action.payload.id,
      );

      writeOperatorsListToStorage(state.operators_list);
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
      const newId = generateId();

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

      writeOperatorsListToStorage(state.operators_list);
    },
  },
});

export const {
  addOperator,
  updateFirstInput,
  updateSecondInput,
  deleteOperator,
  copyOperator,
  overrideOperatorsList,
} = mathematicsSlice.actions;

// Selectors
export const selectOperatorsList = (state: IRootState) =>
  state.mathematicsData.operators_list;

export default mathematicsSlice.reducer;
