import React from "react";
import styles from "./Loader_into.module.css";

const Loader_into = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["loading-box"]}>
        <div className={styles["WH"] + styles["color"] + styles["l1"]}></div>
        <div className={styles["ball"] + styles["color"]}></div>
        <div className={styles["WH"] + styles["color"] + styles["l2"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_into;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_into = () => (
         <div>
          <div className="loading">
  <div className="loading-box">
    <div className="WH color l1"></div>
    <div className="ball color"></div>
    <div className="WH color l2"></div>
  </div>
</div>
        </div>
        );

        export default Loader_into;
        
        
         */
}
