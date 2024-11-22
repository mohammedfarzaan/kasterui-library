import React from "react";
import styles from "./Button_zone.module.css";

const Button_zone = () => (
  <div>
    <button className={styles["container"] + styles["moon-container"]}>
      <div className={styles["moon"]}>
        <div className={styles["mancha2"]}></div>
      </div>
      <div className={styles["moon-text"]}>To the Moon</div>
    </button>
  </div>
);

export default Button_zone;
