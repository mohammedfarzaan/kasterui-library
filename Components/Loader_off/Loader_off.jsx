import React from "react";
import styles from "./Loader_off.module.css";

const Loader_off = () => (
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

export default Loader_off;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_off = () => (
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

        export default Loader_off;
        
        
         */
}
