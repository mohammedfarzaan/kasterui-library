import React from "react";
import styles from "./Loader_breeze.module.css";

const Loader_breeze = () => (
  <div>
    <div className={styles["shake"]}>
      <div className={styles["loader"]}></div>
    </div>
  </div>
);

export default Loader_breeze;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_breeze = () => (
         <div>
          <div className="shake">
<div className="loader"></div>
</div>
        </div>
        );

        export default Loader_breeze;
        
        
         */
}
