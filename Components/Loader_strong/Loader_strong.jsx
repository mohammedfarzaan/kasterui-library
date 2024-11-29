import React from "react";
import styles from "./Loader_strong.module.css";

const Loader_strong = () => (
  <div>
    <div className={styles["spinner"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader_strong;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_strong = () => (
         <div>
          <div className="spinner">
  <span></span>
  <span></span>
  <span></span>
</div>
        </div>
        );

        export default Loader_strong;
        
        
         */
}