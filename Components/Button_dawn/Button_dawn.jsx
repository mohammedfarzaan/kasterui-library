import React from "react";
import styles from "./Button_dawn.module.css";

const Button_dawn = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-overlay"]}></div>
      <span>Gradient Button</span>
    </button>
  </div>
);

export default Button_dawn;
