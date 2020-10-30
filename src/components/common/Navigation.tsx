import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <span>The Overcast</span>
        </Link>
        <div className={styles.menu}>
          <Link to="/episodes" className={styles.episodes_button}>
            Episodes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
