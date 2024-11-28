import React from "react";
import styles from "./Loader_pot.module.css";

const Loader_pot = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["inner"]}></div>
    </div>
  </div>
);

export default Loader_pot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_pot = () => (
         <div>
          <div className="loader">
  <div className="inner">
  </div>
</div>
        </div>
        );

        export default Loader_pot;
        
        
         */
}
