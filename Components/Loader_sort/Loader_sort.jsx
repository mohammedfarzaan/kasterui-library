import React from "react";
import styles from "./Loader_sort.module.css";

const Loader_sort = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["dash"] + styles["first"]}></div>
      <div className={styles["dash"] + styles["seconde"]}></div>
      <div className={styles["dash"] + styles["third"]}></div>
      <div className={styles["dash"] + styles["fourth"]}></div>
    </div>
  </div>
);

export default Loader_sort;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_sort = () => (
         <div>
          <div className="container">
  <div className="dash first"></div>
  <div className="dash seconde"></div>
  <div className="dash third"></div>
  <div className="dash fourth"></div>
</div>
        </div>
        );

        export default Loader_sort;
        
        
         */
}
