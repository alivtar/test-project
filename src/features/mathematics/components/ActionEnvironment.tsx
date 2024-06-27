import OperatorBox from "./OperatorBox";
import styles from "./action_environment.module.sass";

function ActionEnvironment() {
  return (
    <div className={styles.operator_boxes}>
      <OperatorBox />
      <OperatorBox />
      <OperatorBox />
    </div>
  );
}

export default ActionEnvironment;
