import React from "react";
import styles from "./Loader_avoid.module.css";

const Loader_avoid = () => (
  <div>
    <div className={styles["loader"]}>
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

export default Loader_avoid;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_avoid = () => (
         <div>
          <div className="loader">
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

        export default Loader_avoid;
        
        
         */
}
