import { type FC } from "react";
import ActionBar from "./components/ActionBar";
import ActionEnvironment from "./components/ActionEnvironment";
import styles from "./mathematics.module.sass";

const Mathematics: FC = () => {
  return (
    <div className={styles.mathematics_wrapper}>
      <div className={styles.action_bar_wrapper}>
        <ActionBar />
      </div>
      <div className={styles.action_environment_wrapper}>
        <ActionEnvironment />
      </div>
    </div>
  );
};

export default Mathematics;
