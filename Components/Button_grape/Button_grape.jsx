import React from "react";
import styles from "./Button_grape.module.css";

const Button_grape = () => (
  <div>
    <div className={styles["button-borders"]}>
      <button className={styles["primary-button"]}> BUTTON</button>
    </div>
  </div>
);

export default Button_grape;
