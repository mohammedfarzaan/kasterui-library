import React from "react";
import styles from "./Button_bore.module.css";

const Button_bore = () => (
  <div>
    <button>
      <div className={styles["progress"]}>
        <div className={styles["progress-bar"]}> </div>
      </div>

      <p className={styles["before-scan"]}>Find aliens</p>
      <p className={styles["scaning"]}>Scanning</p>
      <p className={styles["complete"]}>No aliens found</p>
    </button>
  </div>
);

export default Button_bore;
