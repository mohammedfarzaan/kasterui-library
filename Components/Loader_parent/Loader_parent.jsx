import React from "react";
import styles from "./Loader_parent.module.css";

const Loader_parent = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["quater"] + styles["i"]}></div>
      <div className={styles["quater"] + styles["ii"]}></div>
    </div>
  </div>
);

export default Loader_parent;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_parent = () => (
         <div>
          <div className="loader">
    <div className="quater i"></div>
    <div className="quater ii"></div>
</div>
        </div>
        );

        export default Loader_parent;
        
        
         */
}
