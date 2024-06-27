import OperatorBox from "./OperatorBox";
import SearchSection from "./SearchSection";
import styles from "./action_environment.module.sass";

function ActionEnvironment() {
  return (
    <div
    // className={styles.action_environment}
    >
      <div className={styles.operator_boxes}>
        <OperatorBox />
        <OperatorBox />
        <OperatorBox />
      </div>

      <SearchSection />
    </div>
  );
}

export default ActionEnvironment;
