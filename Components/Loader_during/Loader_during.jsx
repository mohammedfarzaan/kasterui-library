import React from "react";
import styles from "./Loader_during.module.css";

const Loader_during = () => (
  <div>
    <div className={styles["three-body"]}>
      <div className={styles["three-body__dot"]}></div>
      <div className={styles["three-body__dot"]}></div>
      <div className={styles["three-body__dot"]}></div>
    </div>
  </div>
);

export default Loader_during;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_during = () => (
         <div>
          <div className="three-body">
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
</div>
        </div>
        );

        export default Loader_during;
        
        
         */
}
