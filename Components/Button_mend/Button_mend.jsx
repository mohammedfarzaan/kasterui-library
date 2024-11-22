import React from "react";
import styles from "./Button_mend.module.css";

const Button_mend = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>About us</span>
      <span className={styles["span"]}>Hello!</span>
    </button>
  </div>
);

export default Button_mend;
