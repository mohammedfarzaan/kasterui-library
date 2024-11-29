import React from "react";
import styles from "./Loader_would.module.css";

const Loader_would = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]}>
        <div className={styles["shadow"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_would;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_would = () => (
         <div>
          <div className="container">
<div className="loader">
<div className="shadow"></div>
</div>
</div>
        </div>
        );

        export default Loader_would;
        
        
         */
}
