import React from "react";
import styles from "./Loader_must.module.css";

const Loader_must = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["hour"]}></span>
      <span className={styles["min"]}></span>
      <span className={styles["circel"]}></span>
    </div>
  </div>
);

export default Loader_must;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_must = () => (
         <div>
          <div className="loader">
  <span className="hour"></span>
  <span className="min"></span>
  <span className="circel"></span>
</div>
        </div>
        );

        export default Loader_must;
        
        
         */
}
