import React from "react";
import styles from "./Loader_fix.module.css";

const Loader_fix = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["shape"]}></div>
    </div>
  </div>
);

export default Loader_fix;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fix = () => (
         <div>
          <div className="loader">
  <div className="shape"></div>
</div>
        </div>
        );

        export default Loader_fix;
        
        
         */
}
