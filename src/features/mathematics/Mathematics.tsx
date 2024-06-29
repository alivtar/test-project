import { type FC, useEffect } from "react";
import ActionBar from "./components/ActionBar";
import ActionEnvironment from "./components/ActionEnvironment";
import styles from "./mathematics.module.sass";
import { readOperatorsListFromStorage } from "./utils/storage";
import { overrideOperatorsList } from "./mathematicsSlice";
import { useAppDispatch } from "../../app/store";

const Mathematics: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = readOperatorsListFromStorage();
    console.log("Inside useEffect", data);
    dispatch(overrideOperatorsList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
