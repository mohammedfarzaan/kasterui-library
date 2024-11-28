import React from "react";
import styles from "./Loader_shake.module.css";

const Loader_shake = () => (
  <div>
    <div className={styles["coin"]}>
      <span className={styles["engraving"]}>$</span>
    </div>
  </div>
);

export default Loader_shake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_shake = () => (
         <div>
          <div className="coin">
  <span className="engraving">$</span>
</div>
        </div>
        );

        export default Loader_shake;
        
        
         */
}
