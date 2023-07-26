import styles from "./FooterLinks.module.css";

export default function FooterLinks() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-section"]}>
        <p className={styles["footer-title"]}>PRODUCTS</p>
        <a className={styles["footer-link"]} href="#RelationalDatabase">
          Relational Database
        </a>
        <a className={styles["footer-link"]} href="#GraphDatabase">
          Graph Database
        </a>
        <a className={styles["footer-link"]} href="#GraphBasedSolution">
          Graph-based Solution
        </a>
      </div>

      <div className={styles["footer-section"]}>
        <a
          className={`${styles["footer-title"]} ${styles["footer-title-link"]}`}
          href="#UseCases"
        >
          USE CASES
        </a>
      </div>

      <div className={styles["footer-section"]}>
        <a
          className={`${styles["footer-title"]} ${styles["footer-title-link"]}`}
          href="#Services"
        >
          SERVICES
        </a>
      </div>

      <div className={styles["footer-section"]}>
        <p className={styles["footer-title"]}>RESOURCES</p>
        <a className={styles["footer-link"]} href="#Documentation">
          Documentation
        </a>
        <a className={styles["footer-link"]} href="#Learn">
          Learn
        </a>
      </div>

      <div className={styles["footer-section"]}>
        <a
          className={`${styles["footer-title"]} ${styles["footer-title-link"]}`}
          href="#Blog"
        >
          BLOG
        </a>
      </div>

      <div className={styles["footer-section"]}>
        <p className={styles["footer-title"]}>COMPANY</p>
        <a className={styles["footer-link"]} href="#AboutUs">
          About Us
        </a>
        <a className={styles["footer-link"]} href="#Contact">
          Contact
        </a>
      </div>
    </div>
  );
}
