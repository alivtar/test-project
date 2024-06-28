import { useDispatch } from "react-redux";
import styles from "./action_bar.module.sass";
import { Operator_Types } from "../types";
import { addOperator } from "../mathematicsSlice";

function ActionBar() {
  const dispatch = useDispatch();

  const addNewOperator = (operatorType: Operator_Types) => {
    dispatch(addOperator(operatorType));
  };

  return (
    <div className={styles.action_bar}>
      {Object.keys(Operator_Types).map((item, idx) => {
        return (
          <button
            key={item}
            className="cm-action-btn"
            onClick={() => addNewOperator(item as Operator_Types)}
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
}

export default ActionBar;
