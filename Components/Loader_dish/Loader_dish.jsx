import React from "react";
import styles from "./Loader_dish.module.css";

const Loader_dish = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cell"] + styles["d-0"]}></div>
      <div className={styles["cell"] + styles["d-1"]}></div>
      <div className={styles["cell"] + styles["d-2"]}></div>

      <div className={styles["cell"] + styles["d-1"]}></div>
      <div className={styles["cell"] + styles["d-2"]}></div>

      <div className={styles["cell"] + styles["d-2"]}></div>
      <div className={styles["cell"] + styles["d-3"]}></div>

      <div className={styles["cell"] + styles["d-3"]}></div>
      <div className={styles["cell"] + styles["d-4"]}></div>
    </div>
  </div>
);

export default Loader_dish;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_dish = () => (
         <div>
          <div className="loader">
  <div className="cell d-0"></div>
  <div className="cell d-1"></div>
  <div className="cell d-2"></div>

  <div className="cell d-1"></div>
  <div className="cell d-2"></div>
  
  
  <div className="cell d-2"></div>
  <div className="cell d-3"></div>
  
  
  <div className="cell d-3"></div>
  <div className="cell d-4"></div>
  
  
</div>
        </div>
        );

        export default Loader_dish;
        
        
         */
}
