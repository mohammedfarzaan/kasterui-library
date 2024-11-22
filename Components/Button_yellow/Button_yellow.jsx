import React from "react";
import styles from "./Button_yellow.module.css";

const Button_yellow = () => (
  <div>
    <button className={styles["button"]}>
      <span>Hover me</span>
    </button>
  </div>
);

export default Button_yellow;
