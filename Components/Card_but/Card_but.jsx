import React from "react";
import styles from "./Card_but.module.css";

const Card_but = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["circle"] + styles["small"] + styles["top-left"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles["circle"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={styles["circle"] + styles["small"] + styles["bottom-right"]}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default Card_but;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_but = () => (
         <div>
          <div className="card">
  <div className="circle small top-left">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div className="circle">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div className="circle small bottom-right">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
        </div>
        );

        export default Card_but;
        
        
         */
}
