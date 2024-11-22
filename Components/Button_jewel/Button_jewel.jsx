import React from "react";
import styles from "./Button_jewel.module.css";

const Button_jewel = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["container"]}>
        <button className={styles["button"]}>
          <span>A</span>
        </button>
        <button className={styles["button"]}>
          <span>B</span>
        </button>
        <button className={styles["button"]}>
          <span>C</span>
        </button>
        <button className={styles["button"]}>
          <span>D</span>
        </button>
      </div>
    </div>
  </div>
);

export default Button_jewel;
