import styles from "./search_section.module.sass";
import { type TOperator, selectOperatorsList } from "../mathematicsSlice";
import { type FC, useState } from "react";
import { useAppSelector } from "../../../app/store";

const SearchSection: FC = () => {
  const operatorsList = useAppSelector(selectOperatorsList);
  const [userEnteredValue, setUserEnteredValue] = useState<number | null>(null);

  const [foundOperator, setFoundOperator] = useState<
    // null --> indicates that the "fetch" accured and no corresponding operator found with the provided index.
    // undefined --> indicates that no "fetch" has accured yet.
    TOperator | null | undefined
  >(undefined);

  if (operatorsList.length === 0) return null;

  const findOperator = (): void => {
    if (userEnteredValue) {
      const foundOperator: TOperator | undefined =
        operatorsList[userEnteredValue - 1];

      if (foundOperator) {
        setFoundOperator(foundOperator);
      } else {
        setFoundOperator(null);
      }
    }
  };

  return (
    <section className={styles.searching_section}>
      <div className={styles.search_box_wrapper}>
        <div className={styles.searching_note}>
          <p>Note: Index is NOT zero-based here.</p>
          <p>It starts from 1.</p>
        </div>

        <div className={styles.search_box}>
          <label className="cm-input-label">
            <span>Search</span>
            <input
              type="number"
              placeholder="Operator index"
              className="cm-input"
              value={userEnteredValue ?? ""}
              onChange={(e) => {
                setFoundOperator(undefined);
                setUserEnteredValue(parseInt(e.target.value));
              }}
            />
          </label>

          <button className="cm-action-btn" onClick={findOperator}>
            Fetch
          </button>
        </div>
      </div>

      {/* TODO: show this box, when a "fetch" has accoured */}
      <div className={styles.search_info_wrapper}>
        {foundOperator === undefined ? (
          <p>Enter an index to start searching...</p>
        ) : foundOperator === null ? (
          <p>No operator found with the given index.</p>
        ) : (
          <div>
            {/* They said that the index should start from 1 here */}
            <p>Index: {foundOperator ? userEnteredValue : null}</p>
            <p>
              Operator Inputs:{" "}
              {foundOperator
                ? `${foundOperator.input_1}, ${foundOperator.input_2}`
                : null}
            </p>
            <p>
              Operator Output:{" "}
              {foundOperator ? foundOperator.currentOperatorOutput : null}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
