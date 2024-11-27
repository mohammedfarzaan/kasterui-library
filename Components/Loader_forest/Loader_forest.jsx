import React from "react";
import styles from "./Loader_forest.module.css";

const Loader_forest = () => (
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

export default Loader_forest;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_forest = () => (
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

        export default Loader_forest;
        
        
         */
}
