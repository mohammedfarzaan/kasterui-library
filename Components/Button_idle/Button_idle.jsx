import React from "react";
import styles from "./Button_idle.module.css";

const Button_idle = () => (
  <div>
    <button data-label="Register" className={styles["rainbow-hover"]}>
      <span className={styles["sp"]}>Register</span>
    </button>
  </div>
);

export default Button_idle;
