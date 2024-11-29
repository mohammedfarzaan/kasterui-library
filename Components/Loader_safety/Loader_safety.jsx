import React from "react";
import styles from "./Loader_safety.module.css";

const Loader_safety = () => (
  <div>
    <div className={styles["item"]}>
      <div className={styles["loader-pulse"]}></div>
    </div>
  </div>
);

export default Loader_safety;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_safety = () => (
         <div>
          <div className="item">
    <div className="loader-pulse"></div>
</div>
        </div>
        );

        export default Loader_safety;
        
        
         */
}
