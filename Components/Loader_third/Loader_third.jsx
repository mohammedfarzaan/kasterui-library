import React from "react";
import styles from "./Loader_third.module.css";

const Loader_third = () => (
  <div>
    <div className={styles["coin"]}>
      <span className={styles["engraving"]}>$</span>
    </div>
  </div>
);

export default Loader_third;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_third = () => (
         <div>
          <div className="coin">
  <span className="engraving">$</span>
</div>
        </div>
        );

        export default Loader_third;
        
        
         */
}
