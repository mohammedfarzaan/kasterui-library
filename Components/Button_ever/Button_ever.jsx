import React from "react";
import styles from "./Button_ever.module.css";

const Button_ever = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["lid"]}>
        <span className={styles["side"] + styles["top"]}></span>
        <span className={styles["side"] + styles["front"]}></span>
        <span className={styles["side"] + styles["back"]}> </span>
        <span className={styles["side"] + styles["left"]}></span>
        <span className={styles["side"] + styles["right"]}></span>
      </div>
      <div className={styles["panels"]}>
        <div className={styles["panel-1"]}>
          <div className={styles["panel-2"]}>
            <div className={styles["btn-trigger"]}>
              <span className={styles["btn-trigger-1"]}></span>
              <span className={styles["btn-trigger-2"]}></span>
            </div>
          </div>
        </div>
      </div>
    </button>
  </div>
);

export default Button_ever;
