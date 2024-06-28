import { useSelector } from "react-redux";
import OperatorBox from "./OperatorBox";
import SearchSection from "./SearchSection";
import styles from "./action_environment.module.sass";
import type { IRootState } from "../../../app/store";

function ActionEnvironment() {
  const operatorsList = useSelector(
    (state: IRootState) => state.mathematicsData.operators_list,
  );

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
            return <OperatorBox key={item.operator_type + idx} />;
          })
        )}
      </div>

      {operatorsList.length !== 0 && <SearchSection />}
    </div>
  );
}

export default ActionEnvironment;
