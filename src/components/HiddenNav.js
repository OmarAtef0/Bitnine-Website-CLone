import React, { useState, useEffect } from "react";
import styles from "./HiddenNav.module.css";

const HiddenNav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${show ? styles["nav-active"] : ""}`}>
      <a href="#Offer">
        AG Cloud Express : Experience graph database in a cloud environment for
        FREE!
      </a>
    </nav>
  );
};

export default HiddenNav;
