import React from "react";
import styles from "./Button_vibe.module.css";

const Button_vibe = () => (
  <div>
    <button className={styles["animated-button"]}>
      <span>Hover me</span>
      <span></span>
    </button>
  </div>
);

export default Button_vibe;
