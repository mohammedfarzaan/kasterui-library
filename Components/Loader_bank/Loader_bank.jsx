import React from "react";
import styles from "./Loader_bank.module.css";

const Loader_bank = () => (
  <div>
    <div className={styles["spinner"] + styles["center"]}>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
      <div className={styles["spinner-blade"]}></div>
    </div>
  </div>
);

export default Loader_bank;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bank = () => (
         <div>
          <div className="spinner center">
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
</div>
        </div>
        );

        export default Loader_bank;
        
        
         */
}
