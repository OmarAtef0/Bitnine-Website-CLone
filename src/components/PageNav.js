import styles from "./PageNav.module.css";
import SearchBar from "./SearchBar";
import {
  FaYoutube,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaBloggerB,
  FaSearch,
} from "react-icons/fa";

export default function PageNav() {
  return (
    <div className={styles["page-nav"]}>
      <div className={styles["nav-btns"]}>
        <SearchBar />
        <button className={styles["nav-btn"]}>AG Cloud</button>
        <button className={styles["nav-btn"]}>Apache AGE</button>
        <button className={styles["nav-btn"]}>CONTACT</button>
      </div>

      <div className={styles["social-btns"]}>
        <button className={`${styles["social-btn"]} ${styles.git}`}>
          <FaGithub className={styles.icon} />
        </button>

        <button className={`${styles["social-btn"]} ${styles.stack}`}>
          <FaStackOverflow className={styles.icon} />
        </button>

        <button className={`${styles["social-btn"]} ${styles.youtube}`}>
          <FaYoutube className={styles.icon} />
        </button>

        <button className={`${styles["social-btn"]} ${styles.twitter}`}>
          <FaTwitter className={styles.icon} />
        </button>

        <button className={`${styles["social-btn"]} ${styles.linkedin}`}>
          <FaLinkedinIn className={styles.icon} />
        </button>

        <button className={`${styles["social-btn"]} ${styles.facebook}`}>
          <FaFacebook className={styles.icon} />
        </button>

        <button className={`${styles["social-btn"]} ${styles.naver}`}>
          <FaBloggerB className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
