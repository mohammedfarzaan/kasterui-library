import React from "react";
import styles from "./Loader_plus.module.css";

const Loader_plus = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["inner"]}></div>
    </div>
  </div>
);

export default Loader_plus;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_plus = () => (
         <div>
          <div className="spinner">
  <div className="inner">
  </div>
</div>
        </div>
        );

        export default Loader_plus;
        
        
         */
}
