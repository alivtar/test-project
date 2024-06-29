import styles from "./action_bar.module.sass";
import { Operator_Types } from "../types";
import { addOperator } from "../mathematicsSlice";
import { type FC } from "react";
import { useAppDispatch } from "../../../app/hooks";

const ActionBar: FC = () => {
  const dispatch = useAppDispatch();

  const addNewOperator = (operatorType: Operator_Types) => {
    dispatch(addOperator(operatorType));
  };

  return (
    <div className={styles.action_bar}>
      {Object.values(Operator_Types).map((item, idx) => {
        return (
          <button
            key={item}
            className="cm-action-btn"
            onClick={() => addNewOperator(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ActionBar;
