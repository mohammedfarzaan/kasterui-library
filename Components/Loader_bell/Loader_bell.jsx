import React from "react";
import styles from "./Loader_bell.module.css";

const Loader_bell = () => (
  <div>
    <div className={styles["center-body"]}>
      <div className={styles["loader-circle-9"]}>
        Loading
        <span></span>
      </div>
    </div>
  </div>
);

export default Loader_bell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bell = () => (
         <div>
          <div className="center-body">
  <div className="loader-circle-9">
    Loading
    <span></span>
  </div>
</div>
        </div>
        );

        export default Loader_bell;
        
        
         */
}
