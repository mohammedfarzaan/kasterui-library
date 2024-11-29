import React from "react";
import styles from "./Loader_sum.module.css";

const Loader_sum = () => (
  <div>
    <div className={styles["spinner"]}>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  </div>
);

export default Loader_sum;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_sum = () => (
         <div>
          <div className="spinner">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>
        </div>
        );

        export default Loader_sum;
        
        
         */
}
