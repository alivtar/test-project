import OperatorBox from "./OperatorBox";
import SearchSection from "./SearchSection";
import styles from "./action_environment.module.sass";
import { selectOperatorsList, type TOperator } from "../mathematicsSlice";
import { type FC } from "react";
import { useAppSelector } from "../../../app/hooks";
import { type Operator_Types } from "../types";

const ActionEnvironment: FC = () => {
  const operatorsList = useAppSelector(selectOperatorsList);
  const operatorTypeCounts: { [key in Operator_Types]?: number } = {};

  const renderOperators =
    operatorsList.length === 0 ? (
      <div className={styles.no_data}>
        <h4>There is no operator box...</h4>
        <h5>Select an operator from the left "action bar" to start...</h5>
      </div>
    ) : (
      operatorsList.map((item, idx) => {
        // Initialize the count for the operator type if not already done
        if (!operatorTypeCounts[item.operator_type]) {
          operatorTypeCounts[item.operator_type] = 0;
        }
        // Increment the count for the current operator type
        operatorTypeCounts[item.operator_type]! += 1;
        const title: string = `Operator ${item.operator_type.toLocaleLowerCase()} ${operatorTypeCounts[item.operator_type]}`;

        const previousOperatorObj = operatorsList[idx - 1] as
          | TOperator
          | undefined;

        return (
          <OperatorBox
            key={item.id}
            operatorIndex={idx}
            id={item.id}
            title={title}
            firstInputValue={item.input_1}
            secondInputValue={item.input_2}
            currentOperatorOutput={item.currentOperatorOutput}
            operatorType={item.operator_type}
            previousOperatorOutput={previousOperatorObj?.currentOperatorOutput}
          />
        );
      })
    );

  return (
    <div>
      <div className={styles.operator_boxes}>{renderOperators}</div>
      <SearchSection />
    </div>
  );
};

export default ActionEnvironment;
