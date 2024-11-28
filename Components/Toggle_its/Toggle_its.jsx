import React from "react";
import styles from "./Toggle_its.module.css";

const Toggle_its = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" />
      <span className={styles["slider"]}>
        <span className={styles["circle"]}>
          <span className={styles["shine"] + styles["shine-1"]}></span>
          <span className={styles["shine"] + styles["shine-2"]}></span>
          <span className={styles["shine"] + styles["shine-3"]}></span>
          <span className={styles["shine"] + styles["shine-4"]}></span>
          <span className={styles["shine"] + styles["shine-5"]}></span>
          <span className={styles["shine"] + styles["shine-6"]}></span>
          <span className={styles["shine"] + styles["shine-7"]}></span>
          <span className={styles["shine"] + styles["shine-8"]}></span>
          <span className={styles["moon"]}></span>
        </span>
      </span>
    </label>
  </div>
);

export default Toggle_its;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_its = () => (
         <div>
          <label className="switch">
  <input type="checkbox" />
  <span className="slider">
    <span className="circle">
      <span className="shine shine-1"></span>
      <span className="shine shine-2"></span>
      <span className="shine shine-3"></span>
      <span className="shine shine-4"></span>
      <span className="shine shine-5"></span>
      <span className="shine shine-6"></span>
      <span className="shine shine-7"></span>
      <span className="shine shine-8"></span>
      <span className="moon"></span>
    </span>
  </span>
</label>
        </div>
        );

        export default Toggle_its;
        
        
         */
}
