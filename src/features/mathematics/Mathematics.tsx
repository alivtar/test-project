import { useEffect } from "react";
import ActionBar from "./components/ActionBar";
import ActionEnvironment from "./components/ActionEnvironment";
import styles from "./mathematics.module.sass";
import { readOperatorsListFromStorage } from "./utils/storage";
import { useDispatch } from "react-redux";
import { overrideOperatorsList } from "./mathematicsSlice";

function Mathematics() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = readOperatorsListFromStorage();
    console.log("Inside useEffect", data);
    dispatch(overrideOperatorsList(data));
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
}

export default Mathematics;
