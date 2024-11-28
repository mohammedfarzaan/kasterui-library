import React from "react";
import styles from "./Loader_good.module.css";

const Loader_good = () => (
  <div>
    <div className={styles["spinner"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader_good;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_good = () => (
         <div>
          <div className="spinner">
  <span></span>
  <span></span>
  <span></span>
</div>
        </div>
        );

        export default Loader_good;
        
        
         */
}
