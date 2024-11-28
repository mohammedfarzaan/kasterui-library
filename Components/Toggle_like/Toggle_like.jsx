import React from "react";
import styles from "./Toggle_like.module.css";

const Toggle_like = () => (
  <div>
    <a href="#" className={styles["square"]}>
      <div className={styles["burgerwrap"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  </div>
);

export default Toggle_like;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_like = () => (
         <div>
          <a href="#" className="square">
  <div className="burgerwrap">
    <span></span>
    <span></span>
    <span></span>
  </div>
</a>
        </div>
        );

        export default Toggle_like;
        
        
         */
}
