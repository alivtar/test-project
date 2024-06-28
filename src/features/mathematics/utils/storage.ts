import { type TOperator } from "../mathematicsSlice";

const operators_list_key = "operators_list";

export const writeOperatorsListToStorage = (
  operatorsList: TOperator[],
): void => {
  localStorage.setItem(operators_list_key, JSON.stringify(operatorsList));
};

export const readOperatorsListFromStorage = (): TOperator[] => {
  const data = localStorage.getItem(operators_list_key);

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
