import React from "react";
import styles from "./Loader_wagon.module.css";

const Loader_wagon = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
    </div>
  </div>
);

export default Loader_wagon;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_wagon = () => (
         <div>
          <div className="loader">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
</div>
        </div>
        );

        export default Loader_wagon;
        
        
         */
}
