import React from "react";
import styles from "./Loader_dot.module.css";

const Loader_dot = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}></div>
    </div>
  </div>
);

export default Loader_dot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_dot = () => (
         <div>
          <div className="loader-container">
  <div className="loader"></div>
</div>
        </div>
        );

        export default Loader_dot;
        
        
         */
}
