import ScrollToTopButton from "./ScrollToTopButton";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.section}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <ScrollToTopButton />
    </main>
  );
}
