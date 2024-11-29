import React from "react";
import styles from "./Loader_beauty.module.css";

const Loader_beauty = () => (
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

export default Loader_beauty;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_beauty = () => (
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

        export default Loader_beauty;
        
        
         */
}
