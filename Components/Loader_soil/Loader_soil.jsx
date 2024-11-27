import React from "react";
import styles from "./Loader_soil.module.css";

const Loader_soil = () => (
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

export default Loader_soil;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_soil = () => (
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

        export default Loader_soil;
        
        
         */
}
