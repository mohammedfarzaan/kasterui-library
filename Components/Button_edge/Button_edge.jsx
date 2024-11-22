import React from "react";
import styles from "./Button_edge.module.css";

const Button_edge = () => (
  <div>
    <button className={styles["button"]}>
      <span>Button</span>
      <div className={styles["overlay"]}></div>
      <div className={styles["shine"]}></div>
    </button>
  </div>
);

export default Button_edge;
