import React from "react";
import styles from "./Loader_summer.module.css";

const Loader_summer = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["outer"]}>
        <div className={styles["inner"] + styles["tl"]}></div>
        <div className={styles["inner"] + styles["tr"]}></div>
        <div className={styles["inner"] + styles["br"]}></div>
        <div className={styles["inner"] + styles["bl"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_summer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_summer = () => (
         <div>
          <div className="spinner">
  <div className="outer">
    <div className="inner tl"></div>
    <div className="inner tr"></div>
    <div className="inner br"></div>
    <div className="inner bl"></div>
  </div>
</div>
        </div>
        );

        export default Loader_summer;
        
        
         */
}
