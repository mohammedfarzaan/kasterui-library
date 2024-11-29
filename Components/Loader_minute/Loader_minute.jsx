import React from "react";
import styles from "./Loader_minute.module.css";

const Loader_minute = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["square-1"] + styles["square"]}></div>
      <div className={styles["square-2"] + styles["square"]}></div>
    </div>
  </div>
);

export default Loader_minute;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_minute = () => (
         <div>
          <div className="loader">
  <div className="square-1 square"></div>
  <div className="square-2 square"></div>
</div>
        </div>
        );

        export default Loader_minute;
        
        
         */
}
