import styles from "./operator_box.module.sass";

function OperatorBox() {
  return (
    <div className={styles.operator_box}>
      <h1 className={styles.operator_title}>Operator title</h1>

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
                value={""}
                onChange={(e) => {}}
              />
            </label>

            <label className="cm-input-label">
              <span>Second input:</span>
              <input
                type="number"
                className="cm-input"
                value={""}
                onChange={(e) => {}}
              />
            </label>
          </div>

          {/* TODO: this summary will ONLY be shown for " >= 1" indecies */}
          <div className={styles.summary_wrapper}>
            <p>Summary above operator</p>
            <div className={styles.summary}>value: 30</div>
          </div>
        </div>

        <div className={styles.output_and_actions}>
          <div className={styles.operator_box_actions}>
            <button className="cm-delete-btn">Delete</button>
            <button className="cm-copy-btn">Copy</button>
          </div>

          <div className={styles.operator_output}>
            <p>Output Of Current Operator:</p>
            <span>20</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperatorBox;
