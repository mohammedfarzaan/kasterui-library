import React from "react";
import styles from "./Loader_plant.module.css";

const Loader_plant = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__bar"]}></div>
      <div className={styles["loader__ball"]}></div>
    </div>
  </div>
);

export default Loader_plant;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_plant = () => (
         <div>
          <div className="loader">
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__ball"></div>
</div>
        </div>
        );

        export default Loader_plant;
        
        
         */
}
