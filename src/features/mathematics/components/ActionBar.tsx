import styles from "./action_bar.module.sass";

function ActionBar() {
  return (
    <div className={styles.action_bar}>
      <button className="cm-action-btn">Sum</button>
      <button className="cm-action-btn">Minus</button>
      <button className="cm-action-btn">Divide</button>
      <button className="cm-action-btn">Multiply</button>
    </div>
  );
}

export default ActionBar;
