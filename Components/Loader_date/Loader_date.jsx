import React from "react";
import styles from "./Loader_date.module.css";

const Loader_date = () => (
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

export default Loader_date;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_date = () => (
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

        export default Loader_date;
        
        
         */
}
