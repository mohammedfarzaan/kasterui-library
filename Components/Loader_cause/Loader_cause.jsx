import React from "react";
import styles from "./Loader_cause.module.css";

const Loader_cause = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["leaf"]}></div>
      <div className={styles["leaf"]}></div>
      <div className={styles["leaf"]}></div>
    </div>
  </div>
);

export default Loader_cause;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_cause = () => (
         <div>
          <div className="loader">
  <div className="leaf"></div>
  <div className="leaf"></div>
  <div className="leaf"></div>
</div>
        </div>
        );

        export default Loader_cause;
        
        
         */
}
