import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <button
        className={`${styles["scroll-to-top"]}
        ${isVisible ? styles.move : ""}
            `}
        onClick={scrollToTop}
      >
        <FaArrowUp className={styles.arrow} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
