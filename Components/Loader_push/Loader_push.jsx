import React from "react";
import styles from "./Loader_push.module.css";

const Loader_push = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["loader"] + styles["l1"]}></div>
      <div className={styles["loader"] + styles["l2"]}></div>
    </div>
  </div>
);

export default Loader_push;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_push = () => (
         <div>
          <div className="spinner">
<div className="loader l1"></div>
<div className="loader l2"></div>
</div>
        </div>
        );

        export default Loader_push;
        
        
         */
}
