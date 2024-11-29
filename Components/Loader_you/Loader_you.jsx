import React from "react";
import styles from "./Loader_you.module.css";

const Loader_you = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
    </div>
  </div>
);

export default Loader_you;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_you = () => (
         <div>
          <div className="loader">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>
        </div>
        );

        export default Loader_you;
        
        
         */
}
