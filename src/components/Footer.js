import {
  FaYoutube,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaBloggerB,
} from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2023 by Bitnine Global Inc. All Rights Reserved.
      </p>

      <div
        className={`${styles["social-btns"]} ${styles["footer-social-btns"]}`}
      >
        <button className={`${styles["footer-social-btn"]} ${styles.git}`}>
          <FaGithub className={styles["footer-icon"]} />
        </button>

        <button className={`${styles["footer-social-btn"]} ${styles.stack}`}>
          <FaStackOverflow className={styles["footer-icon"]} />
        </button>

        <button className={`${styles["footer-social-btn"]} ${styles.youtube}`}>
          <FaYoutube className={styles["footer-icon"]} />
        </button>

        <button className={`${styles["footer-social-btn"]} ${styles.twitter}`}>
          <FaTwitter className={styles["footer-icon"]} />
        </button>

        <button className={`${styles["footer-social-btn"]} ${styles.linkedin}`}>
          <FaLinkedinIn className={styles["footer-icon"]} />
        </button>

        <button className={`${styles["footer-social-btn"]} ${styles.facebook}`}>
          <FaFacebook className={styles["footer-icon"]} />
        </button>

        <button className={`${styles["footer-social-btn"]} ${styles.naver}`}>
          <FaBloggerB className={styles["footer-icon"]} />
        </button>
      </div>

      <div className={styles["footer-btns"]}>
        <button className={styles["footer-btn"]}>Apache AGE</button>
        <button className={styles["footer-btn"]}>CONTACT</button>
      </div>
    </footer>
  );
}
