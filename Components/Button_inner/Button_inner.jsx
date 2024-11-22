import React from "react";
import styles from "./Button_inner.module.css";

const Button_inner = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-1"]}>Hello!</button>
  </div>
);

export default Button_inner;
