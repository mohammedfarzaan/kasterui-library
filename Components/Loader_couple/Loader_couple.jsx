import React from "react";
import styles from "./Loader_couple.module.css";

const Loader_couple = () => (
  <div>
    <div className={styles["sun"]}>
      <div className={styles["center"]}></div>
      <div className={styles["ray"] + styles["r-1"]}></div>
      <div className={styles["ray"] + styles["r-2"]}></div>
      <div className={styles["ray"] + styles["r-3"]}></div>
      <div className={styles["ray"] + styles["r-4"]}></div>
      <div className={styles["ray"] + styles["r-5"]}></div>
      <div className={styles["ray"] + styles["r-6"]}></div>
      <div className={styles["ray"] + styles["r-7"]}></div>
      <div className={styles["ray"] + styles["r-8"]}></div>
    </div>
  </div>
);

export default Loader_couple;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_couple = () => (
         <div>
          <div className="sun">
  <div className="center"></div>
  <div className="ray r-1"></div>
  <div className="ray r-2"></div>
  <div className="ray r-3"></div>
  <div className="ray r-4"></div>
  <div className="ray r-5"></div>
  <div className="ray r-6"></div>
  <div className="ray r-7"></div>
  <div className="ray r-8"></div>
</div>
        </div>
        );

        export default Loader_couple;
        
        
         */
}
