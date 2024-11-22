import React from "react";
import styles from "./Button_ease.module.css";

const Button_ease = () => (
  <div>
    <div className={styles["container"]}>
      <a href="#" className={styles["button"] + styles["type--C"]}>
        <div className={styles["button__line"]}></div>
        <div className={styles["button__line"]}></div>
        <span className={styles["button__text"]}>ENTRY</span>
        <div className={styles["button__drow1"]}></div>
        <div className={styles["button__drow2"]}></div>
      </a>
    </div>
  </div>
);

export default Button_ease;
