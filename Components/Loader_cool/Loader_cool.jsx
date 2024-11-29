import React from "react";
import styles from "./Loader_cool.module.css";

const Loader_cool = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"] + styles["outer"]}></div>
      <div className={styles["circle"] + styles["inner"]}></div>
    </div>
  </div>
);

export default Loader_cool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_cool = () => (
         <div>
          <div className="loader">
  <div className="circle outer"></div>
  <div className="circle inner"></div>
</div>
        </div>
        );

        export default Loader_cool;
        
        
         */
}
