import React from "react";
import styles from "./Input_cheese.module.css";

const Input_cheese = () => (
  <div>
    <div className={styles["wave-group"]}>
      <input required="" type="text" className={styles["input"]} />
      <span className={styles["bar"]}></span>
      <label className={styles["label"]}>
        <span className={styles["label-char"]} style="--index: 0">
          N
        </span>
        <span className={styles["label-char"]} style="--index: 1">
          a
        </span>
        <span className={styles["label-char"]} style="--index: 2">
          m
        </span>
        <span className={styles["label-char"]} style="--index: 3">
          e
        </span>
      </label>
    </div>
  </div>
);

export default Input_cheese;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_cheese = () => (
         <div>
          <div className="wave-group">
  <input required="" type="text" className="input" />
  <span className="bar"></span>
  <label className="label">
    <span className="label-char" style="--index: 0">N</span>
    <span className="label-char" style="--index: 1">a</span>
    <span className="label-char" style="--index: 2">m</span>
    <span className="label-char" style="--index: 3">e</span>
  </label>
</div>
        </div>
        );

        export default Input_cheese;
        
        
         */
}
