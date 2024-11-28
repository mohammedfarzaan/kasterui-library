import React from "react";
import styles from "./Loader_broad.module.css";

const Loader_broad = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["square"]} id="sq1"></div>
      <div className={styles["square"]} id="sq2"></div>
      <div className={styles["square"]} id="sq3"></div>
      <div className={styles["square"]} id="sq4"></div>
      <div className={styles["square"]} id="sq5"></div>
      <div className={styles["square"]} id="sq6"></div>
      <div className={styles["square"]} id="sq7"></div>
      <div className={styles["square"]} id="sq8"></div>
      <div className={styles["square"]} id="sq9"></div>
    </div>
  </div>
);

export default Loader_broad;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_broad = () => (
         <div>
          <div className="loader">
  <div className="square" id="sq1"></div>
  <div className="square" id="sq2"></div>
  <div className="square" id="sq3"></div>
  <div className="square" id="sq4"></div>
  <div className="square" id="sq5"></div>
  <div className="square" id="sq6"></div>
  <div className="square" id="sq7"></div>
  <div className="square" id="sq8"></div>
  <div className="square" id="sq9"></div>
</div>
        </div>
        );

        export default Loader_broad;
        
        
         */
}
