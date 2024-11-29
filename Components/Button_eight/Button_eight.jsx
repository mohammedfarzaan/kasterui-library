import React from "react";
import styles from "./Button_eight.module.css";

const Button_eight = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["b-hover"]}>
        <div className={styles["cir-1"] + styles["filter"]}></div>
        <div className={styles["cir-2"] + styles["filter"]}></div>
        <div className={styles["cir-3"] + styles["filter"]}></div>
        <div className={styles["cir-4"] + styles["filter"]}></div>
        <div className={styles["cir-5"] + styles["filter"]}></div>
        <div className={styles["cir-6"] + styles["filter"]}></div>
      </div>
      Charge &amp; Go
    </button>
  </div>
);

export default Button_eight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_eight = () => (
         <div>
          <button className="button">
  <div className="b-hover">
    <div className="cir-1 filter"></div>
    <div className="cir-2 filter"></div>
    <div className="cir-3 filter"></div>
    <div className="cir-4 filter"></div>
    <div className="cir-5 filter"></div>
    <div className="cir-6 filter"></div>
  </div>
  Charge &amp; Go
</button>
        </div>
        );

        export default Button_eight;
        
        
         */
}
