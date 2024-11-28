import React from "react";
import styles from "./Loader_fort.module.css";

const Loader_fort = () => (
  <div>
    <div className={styles["loader-1"]}>
      <div className={styles["loader-2"]}></div>
      <div className={styles["loader-3"]}></div>
      <div className={styles["loader-4"]}></div>
    </div>
  </div>
);

export default Loader_fort;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fort = () => (
         <div>
          <div className="loader-1">
  <div className="loader-2"></div>
  <div className="loader-3"></div>
  <div className="loader-4"></div>
</div>
        </div>
        );

        export default Loader_fort;
        
        
         */
}
