import React from "react";
import styles from "./Button_bliss.module.css";

const Button_bliss = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["center"]}>
        <button className={styles["btn"]}>
          <svg
            className={styles["border"]}
            viewBox="0 0 180 60"
            height="60px"
            width="180px"
          >
            <polyline
              className={styles["bg-line"]}
              points="179,1 179,59 1,59 1,1 179,1"
            ></polyline>
            <polyline
              className={styles["hl-line"]}
              points="179,1 179,59 1,59 1,1 179,1"
            ></polyline>
          </svg>
          <span>HOVER ME</span>
        </button>
      </div>
    </div>
  </div>
);

export default Button_bliss;
