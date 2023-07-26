import styles from "./DropdownMenu.module.css";

export default function DropdownMenu() {
  return (
    <select className={styles.myselect}>
      <option value="">Select Language</option>
      <option value="English">English</option>
      <option value="한국어">한국어</option>
    </select>
  );
}
