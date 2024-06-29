import { Operator_Types } from "../types";

export const calculate = (
  input_1: number,
  input_2: number,
  operator_type: Operator_Types,
  additive?: number,
): number => {
  let output: number = 0;

  if (operator_type === Operator_Types.SUM) {
    output = input_1 + input_2;
  } else if (operator_type === Operator_Types.MINUS) {
    output = input_1 - input_2;
  } else if (operator_type === Operator_Types.DIVIDE) {
    output = input_1 / input_2;
  } else if (operator_type === Operator_Types.MULTIPLY) {
    output = input_1 * input_2;
  }

  if (additive) {
    return output + additive;
  } else {
    return output;
  }
};
