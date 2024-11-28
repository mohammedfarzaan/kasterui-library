import React from "react";
import styles from "./Loader_fruit.module.css";

const Loader_fruit = () => (
  <div>
    <div className={styles["pyramid-loader"]}>
      <div className={styles["wrapper"]}>
        <span className={styles["side"] + styles["side1"]}></span>
        <span className={styles["side"] + styles["side2"]}></span>
        <span className={styles["side"] + styles["side3"]}></span>
        <span className={styles["side"] + styles["side4"]}></span>
        <span className={styles["shadow"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_fruit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fruit = () => (
         <div>
          <div className="pyramid-loader">
  <div className="wrapper">
    <span className="side side1"></span>
    <span className="side side2"></span>
    <span className="side side3"></span>
    <span className="side side4"></span>
    <span className="shadow"></span>
  </div>  
</div>
        </div>
        );

        export default Loader_fruit;
        
        
         */
}
