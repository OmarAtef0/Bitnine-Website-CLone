import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaRegWindowClose, FaSearch } from "react-icons/fa";

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["search-bar"]}>
      <input
        className={`${isOpen ? styles["search-input"] : styles.hideSearch}`}
        type="text"
        placeholder="SEARCH"
      />
      <button
        onClick={() => setIsOpen(false)}
        className={`${!isOpen ? styles.hide : styles.button}`}
      >
        <FaRegWindowClose className={(styles.icon, styles["x-btn"])} />
      </button>

      <button
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? styles.hide : styles.button}`}
      >
        <FaSearch className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchBar;
