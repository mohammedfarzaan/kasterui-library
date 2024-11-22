import React from "react";
import styles from "./Button_peak.module.css";

const Button_peak = () => (
  <div>
    <div className={styles["div"]}>
      <button className={styles["button"]}>
        <span className={styles["span"]}> HOVER ME </span>
      </button>
    </div>
  </div>
);

export default Button_peak;
