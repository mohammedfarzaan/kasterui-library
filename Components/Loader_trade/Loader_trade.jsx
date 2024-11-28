import React from "react";
import styles from "./Loader_trade.module.css";

const Loader_trade = () => (
  <div>
    <div className={styles["loop"] + styles["cubes"]}>
      <div className={styles["item"] + styles["cubes"]}></div>
      <div className={styles["item"] + styles["cubes"]}></div>
      <div className={styles["item"] + styles["cubes"]}></div>
      <div className={styles["item"] + styles["cubes"]}></div>
      <div className={styles["item"] + styles["cubes"]}></div>
      <div className={styles["item"] + styles["cubes"]}></div>
    </div>
  </div>
);

export default Loader_trade;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_trade = () => (
         <div>
          <div className="loop cubes">
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
</div>
        </div>
        );

        export default Loader_trade;
        
        
         */
}
