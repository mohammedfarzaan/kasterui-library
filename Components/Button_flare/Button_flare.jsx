import React from "react";
import styles from "./Button_flare.module.css";

const Button_flare = () => (
  <div>
    <button className={styles["button"] + styles["type1"]}>
      <span className={styles["btn-txt"]}>Hello</span>
    </button>
  </div>
);

export default Button_flare;
