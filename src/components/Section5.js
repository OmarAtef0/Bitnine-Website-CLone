import styles from "./Section5.module.css";

export default function Section5() {
  return (
    <div className={styles.section3}>
      <p className={styles.title1}>Agens Enterprise Package</p>
      <p className={styles.details}>
        Agens Enterprise Package comes with a high availability management
        server that <br></br>
        supports backup and data monitoring dashboard that helps enterprise
        customers manage their data efficiently.
      </p>

      <div className={styles.colgrid}>
        <div className={styles.col1}>
          <p className={styles["third-title"]}>Agens HA Manager</p>
          <p className={`${styles["third-title"]} ${styles.b}`}>
            HA Clustering – Failover/Failback, Load-balancing
          </p>
          <img
            src="img/img_AHM_eng-1024x922.png"
            alt="Agens Enterprise Package"
            className={styles.network}
          />
          <p className={styles.title3}>Replication</p>
        </div>
        <div className={styles.col2}>
          <p className={styles["third-title"]}>Agens Enterprise Manager</p>

          <div className={styles.cards}>
            <div className={styles.cardContainer}>
              <div className={styles.cardRectangle}>
                <div className={styles.front}>
                  <p>Backup/Restore</p>
                </div>
                <div className={styles.back}>
                  <ul>
                    <li>
                      provides a convenient interface for backup & restore
                    </li>
                    <li>
                      provides backup & restore features for DB and table
                      objects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.cardContainer}>
              <div className={styles.cardRectangle}>
                <div className={styles.front}>
                  <p>DB Monitoring Dashboard</p>
                </div>
                <div className={styles.back}>
                  <ul>
                    <li>monitors real-time session & transaction lock</li>
                    <li>provides status for server CPU & memory</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.cardContainer}>
              <div className={styles.cardRectangle}>
                <div className={styles.front}>
                  <p>Schedule Management</p>
                </div>
                <div className={styles.back}>
                  <ul>
                    <li>
                      provides module for script, SQL job, and scheduling
                      management
                    </li>
                    <li>provides UX dedicated to scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.cardContainer}>
              <div className={styles.cardRectangle}>
                <div className={styles.front}>
                  <p>Database Audit</p>
                </div>
                <div className={styles.back}>
                  <ul>
                    <li>enables auditing via user interface</li>
                    <li>view audit results via user interface</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.cardContainer}>
              <div className={styles.cardRectangle}>
                <div className={styles.front}>
                  <p>SQL Monitoring</p>
                </div>
                <div className={styles.back}>
                  <ul>
                    <li>
                      collects query statistics required for performance
                      analysis
                    </li>
                    <li>extracts monitoring results in query</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.cardRectangle}>
                <div className={styles.front}>
                  <p>Performance Management</p>
                </div>
                <div className={styles.back}>
                  <ul>
                    <li>
                      monitors and collects operation status & statistical data
                    </li>
                    <li>
                      provides status reports required for improving performance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
