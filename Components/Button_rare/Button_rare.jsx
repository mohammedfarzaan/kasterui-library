import React from "react";
import styles from "./Button_rare.module.css";

const Button_rare = () => (
  <div>
    <div className={styles["button"]}>
      <span className={styles["text"]}>hover me</span>
      <span className={styles["arrow"]}></span>
    </div>
  </div>
);

export default Button_rare;
