import { useState, useEffect } from "react";
import PageNav from "./PageNav";
import PageHeader from "./PageHeader";
import styles from "./TopHeader.module.css";

export default function TopHeader() {
  const [goDown, setGoDown] = useState(false);

  useEffect(() => {
    const handleDown = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setGoDown(true);
      } else {
        setGoDown(false);
      }
    };
    window.addEventListener("scroll", handleDown, { passive: true });
    return () => window.removeEventListener("scroll", handleDown);
  }, []);

  return (
    <header
      className={`${styles.header} ${goDown ? styles["header-down"] : ""}`}
    >
      <PageNav />
      <PageHeader goDown={goDown} />
    </header>
  );
}
