import { useDispatch } from "react-redux";
import styles from "./action_bar.module.sass";
import { Operator_Types } from "../types";
import { addOperator } from "../mathematicsSlice";
import { type FC } from "react";

const ActionBar: FC = () => {
  const dispatch = useDispatch();

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

      {/* <button className="cm-action-btn">Minus</button>
      <button className="cm-action-btn">Divide</button>
      <button className="cm-action-btn">Multiply</button> */}
    </div>
  );
};

export default ActionBar;
