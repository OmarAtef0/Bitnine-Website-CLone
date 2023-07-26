import styles from "./Section3.module.css";

export default function Section3() {
  return (
    <div>
      <p className={styles.title1}>Key features</p>
      <p className={styles.details}>
        Manage your data with Agens Enterprise Package <br></br>Essential
        enterprise features such as high availability and sharding are provided
      </p>
      <img src="img/img_key-features_eng-1024x402.png" alt="Agen SQL" />
    </div>
  );
}
