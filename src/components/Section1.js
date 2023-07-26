import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <div>
      <img
        src="img/AgenSQL-Logo.png"
        alt="Agen SQL"
        className={styles["part-img"]}
      />
      <p className={styles.title}>
        An integration of Bitnine’s DB technology and PG expertise
      </p>
      <div className={styles.details}>
        <p>
          AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
          of expertise <br></br>and knowledge accumulated through database
          research and development.
        </p>
        <p>
          The enterprise package, along with AgensSQL engine, is an all-in-one
          solution that ensures <br></br>the efficiency and scalability of data
          management.
        </p>
        <p>
          Get AgensSQL now for stable operation and management services at a
          reduced<br></br> maintenance cost.
        </p>
      </div>

      <div className={styles["cta-btns"]}>
        <button className={styles["cta-btn"]}>CONTACT</button>
        <button className={styles["cta-btn"]}>BROCHURE</button>
        <button className={styles["cta-btn"]}>BLOG</button>
      </div>
    </div>
  );
}
