import React from "react";
import styles from "./Loader_fish.module.css";

const Loader_fish = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["item"] + styles["item-1"]}></div>
      <div className={styles["item"] + styles["item-2"]}></div>
      <div className={styles["item"] + styles["item-3"]}></div>
      <div className={styles["item"] + styles["item-4"]}></div>
    </div>
  </div>
);

export default Loader_fish;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fish = () => (
         <div>
          <div className="container">
    <div className="item item-1"></div>
    <div className="item item-2"></div>
    <div className="item item-3"></div>
    <div className="item item-4"></div>
</div>
        </div>
        );

        export default Loader_fish;
        
        
         */
}
