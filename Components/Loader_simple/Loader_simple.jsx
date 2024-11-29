import React from "react";
import styles from "./Loader_simple.module.css";

const Loader_simple = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
    </div>
  </div>
);

export default Loader_simple;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_simple = () => (
         <div>
          <div className="loader">
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
</div>
        </div>
        );

        export default Loader_simple;
        
        
         */
}
