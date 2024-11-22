import React from "react";
import styles from "./Button_fable.module.css";

const Button_fable = () => (
  <div>
    <button className={styles["animated-button"]}>
      <span>Hover me</span>
    </button>
  </div>
);

export default Button_fable;
