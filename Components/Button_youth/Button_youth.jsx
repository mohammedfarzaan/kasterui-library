import React from "react";
import styles from "./Button_youth.module.css";

const Button_youth = () => (
  <div>
    <div className={styles["container"]}>
      <button>
        <span id="u">u</span>
        <span id="n">n</span>
        <span id="i">i</span>
        <span id="v">v</span>
        <span id="e">e</span>
        <span id="r">r</span>
        <span id="s">s</span>
        <span id="ee">e</span>
      </button>
      <div className={styles["moon"]}></div>
    </div>
  </div>
);

export default Button_youth;
