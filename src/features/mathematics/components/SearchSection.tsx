import styles from "./search_section.module.sass";

function SearchSection() {
  return (
    <section className={styles.searching_section}>
      <div className={styles.search_box_wrapper}>
        <div className={styles.search_box}>
          <label className="cm-input-label">
            <span>Search</span>
            <input
              type="number"
              placeholder="Operator index"
              className="cm-input"
              value={""}
              onChange={(e) => {}}
            />
          </label>

          <button className="cm-action-btn">Fetch</button>
        </div>
      </div>

      {/* TODO: show this box, when a "fetch" has accoured */}
      <div className={styles.search_info_wrapper}>
        {/* They said that the index should start from 1 here */}
        <p>Index: 1</p>
        <p>Operator Inputs: 12, 20</p>
        <p>Operator Output: 32</p>
      </div>
    </section>
  );
}

export default SearchSection;
