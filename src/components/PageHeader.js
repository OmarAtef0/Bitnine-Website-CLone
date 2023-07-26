import { useState } from "react";
import styles from "./PageHeader.module.css";

export default function PageHeader({ goDown }) {
  return (
    <div className={styles["page-header"]}>
      <img
        src="img/b_logo.png"
        alt="Bitnine Logo"
        className={`${styles.logo} ${
          goDown ? styles["logo-small"] : styles["logo-big"]
        }`}
      />

      <div className={styles["header-btns"]}>
        <button className={styles["header-btn"]}>PRODUCTS</button>

        <button className={styles["header-btn"]}>USE CASES</button>
        <button className={styles["header-btn"]}>SERVICES</button>
        <button className={styles["header-btn"]}>RESOURCES</button>
        <button className={styles["header-btn"]}>BLOG</button>
        <button className={styles["header-btn"]}>COMPANY</button>
        <button className={styles["header-btn"]}>IR</button>
        <button className={`${styles["header-btn"]} ${styles["cta-btn"]}`}>
          TRY FREE
        </button>
      </div>
    </div>
  );
}
