import React from "react";
import styles from "./Loader_begun.module.css";

const Loader_begun = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["head"]}></div>

      <div className={styles["flames"]}>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
      </div>

      <div className={styles["eye"]}></div>
    </div>
  </div>
);

export default Loader_begun;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_begun = () => (
         <div>
          <div className="loader">
  <div className="head"></div>
  
  <div className="flames">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>
  
  <div className="eye"></div>
</div>
        </div>
        );

        export default Loader_begun;
        
        
         */
}
