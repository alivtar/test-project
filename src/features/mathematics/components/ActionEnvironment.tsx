import { useSelector } from "react-redux";
import OperatorBox from "./OperatorBox";
import SearchSection from "./SearchSection";
import styles from "./action_environment.module.sass";
import type { Operator_Types } from "../types";
import { selectOperatorsList, type TOperator } from "../mathematicsSlice";
import { IRootState } from "../../../app/store";

function ActionEnvironment() {
  const operatorsList = useSelector(selectOperatorsList);

  console.log("operatorsList", operatorsList);

  // const getOperatorNumber = (operator_type: Operator_Types) => {
  //   const allItemsWithDesiredOperator = operatorsList.filter(
  //     (item) => item.operator_type === operator_type,
  //   );
  // };

  return (
    <div
    // className={styles.action_environment}
    >
      <div className={styles.operator_boxes}>
        {operatorsList.length === 0 ? (
          <div className={styles.no_data}>
            <h4>There is no operator box...</h4>
            <h5>Select an operator from the left "action bar" to start...</h5>
          </div>
        ) : (
          operatorsList.map((item, idx) => {
            const previousOperatorObj = operatorsList[idx - 1] as
              | TOperator
              | undefined;

            return (
              <OperatorBox
                key={item.id}
                operatorIndex={idx}
                id={item.id}
                title={`Operator ${item.operator_type.toLocaleLowerCase()} ${idx}`} // TODO
                firstInputValue={item.input_1}
                secondInputValue={item.input_2}
                currentOperatorOutput={item.currentOperatorOutput}
                operatorType={item.operator_type}
                previousOperatorOutput={
                  previousOperatorObj?.currentOperatorOutput
                }
              />
            );
          })
        )}
      </div>

      <SearchSection />
    </div>
  );
}

export default ActionEnvironment;
