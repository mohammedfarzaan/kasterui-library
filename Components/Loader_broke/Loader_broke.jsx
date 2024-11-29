import React from "react";
import styles from "./Loader_broke.module.css";

const Loader_broke = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["orbe"]} style="--index: 0"></div>
      <div className={styles["orbe"]} style="--index: 1"></div>
      <div className={styles["orbe"]} style="--index: 2"></div>
      <div className={styles["orbe"]} style="--index: 3"></div>
      <div className={styles["orbe"]} style="--index: 4"></div>
    </div>
  </div>
);

export default Loader_broke;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_broke = () => (
         <div>
          <div className="loader">
    <div className="orbe" style="--index: 0"></div>
    <div className="orbe" style="--index: 1"></div>
    <div className="orbe" style="--index: 2"></div>
    <div className="orbe" style="--index: 3"></div>
    <div className="orbe" style="--index: 4"></div>
</div>
        </div>
        );

        export default Loader_broke;
        
        
         */
}
