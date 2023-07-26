import { useState } from "react";
import styles from "./Section4.module.css";

export default function Section4() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const [isHovering2, setIsHovering2] = useState(false);
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };

  const [isHovering3, setIsHovering3] = useState(false);
  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };

  return (
    <div className={`${styles.section3} ${styles.blu}`}>
      <p className={styles.title1}>AgensSQL DB Engine</p>
      <p className={styles["second-title"]}>Enhanced Data Security</p>
      <p className={styles.details}>
        AgensSQL is a PostgreSQL-based DBMS <br></br>
        that guarantees optimal security and stability.
      </p>

      <div className={styles.container}>
        <div
          className={styles.card}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className={isHovering ? styles.list : styles.hide}>
            <li>
              user password policy reinforces <br></br> login security
            </li>
            <li>
              excessive failed login attempts <br></br> lock an account
            </li>
            <li>define rules for password complexity</li>
          </ul>

          <img
            src="img/passwordProfile.jpg"
            className={
              isHovering ? styles.hide : `${styles.photo} ${styles.p1}`
            }
            alt="passwordProfile"
          />
        </div>
        <div
          className={styles.card}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <ul className={isHovering2 ? styles.list : styles.hide}>
            <li>
              enhanced data security of user<br></br> personal information
            </li>
            <li>
              resolve privacy issues in <br></br>preparation for security audits
            </li>
            <li>
              encryption or masking with <br></br>unidentifiable special
              characters
            </li>
          </ul>

          <img
            src="img/DataRedaction.jpg"
            className={
              isHovering2 ? styles.hide : `${styles.photo} ${styles.p1}`
            }
            alt="passwordProfile"
          />
        </div>
        <div
          className={styles.card}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <ul className={isHovering3 ? styles.list : styles.hide}>
            <li>
              monitors database activities and <br></br>collects data
            </li>
            <li>
              traces object accessed or DDL & <br></br> DML statements executed
              by a user
            </li>
            <li>records all actions in logs</li>
          </ul>

          <img
            src="img/passwordProfile.jpg"
            className={isHovering3 ? styles.hide : `${styles.photo}`}
            alt="passwordProfile"
          />
        </div>
      </div>
    </div>
  );
}
