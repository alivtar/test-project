import { useDispatch } from "react-redux";
import styles from "./operator_box.module.sass";
import { updateFirstInput, updateSecondInput } from "../mathematicsSlice";

type TOperatorBox = {
  readonly id: number;
  readonly operatorIndex: number;
  title: string;
  firstInputValue: number;
  secondInputValue: number;
  currentOperatorOutput: number | undefined;
};

function OperatorBox({
  title,
  operatorIndex,
  id,
  firstInputValue,
  secondInputValue,
  currentOperatorOutput,
}: TOperatorBox) {
  const dispatch = useDispatch();

  return (
    <div className={styles.operator_box}>
      <h1 className={styles.operator_title}>{title}</h1>

      <div className={styles.operations_wrapper}>
        <div
        //   className={styles.inputs_and_summary}
        >
          <div className={styles.inputs}>
            <label className="cm-input-label">
              <span>First input:</span>
              <input
                type="number"
                className="cm-input"
                value={firstInputValue}
                onChange={(e) => {
                  dispatch(
                    updateFirstInput({
                      id,
                      firstInputValue: Number(e.target.value),
                    }),
                  );
                }}
              />
            </label>

            <label className="cm-input-label">
              <span>Second input:</span>
              <input
                type="number"
                className="cm-input"
                value={secondInputValue}
                onChange={(e) => {
                  dispatch(
                    updateSecondInput({
                      id,
                      secondInputValue: Number(e.target.value),
                    }),
                  );
                }}
              />
            </label>
          </div>

          {/* TODO: this summary will ONLY be shown for " >= 1" indecies */}
          {operatorIndex > 0 && (
            <div className={styles.summary_wrapper}>
              <p>Summary above operator</p>
              <div className={styles.summary}>value: 30</div>
            </div>
          )}
        </div>

        <div className={styles.output_and_actions}>
          <div className={styles.operator_box_actions}>
            <button className="cm-delete-btn">Delete</button>
            <button className="cm-copy-btn">Copy</button>
          </div>

          <div className={styles.operator_output}>
            <p>Output Of Current Operator:</p>
            <span>{currentOperatorOutput}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperatorBox;
