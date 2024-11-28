import React from "react";
import styles from "./Loader_rush.module.css";

const Loader_rush = () => (
  <div>
    <div className={styles["cssload-container"]}>
      <ul className={styles["cssload-flex-container"]}>
        <li>
          <span
            className={styles["cssload-loading"] + styles["cssload-one"]}
          ></span>
          <span
            className={styles["cssload-loading"] + styles["cssload-two"]}
          ></span>
          <span className={styles["cssload-loading-center"]}></span>
        </li>
      </ul>
    </div>
  </div>
);

export default Loader_rush;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rush = () => (
         <div>
          <div className="cssload-container">
   <ul className="cssload-flex-container">
      <li>
         <span className="cssload-loading cssload-one"></span>
         <span className="cssload-loading cssload-two"></span>
         <span className="cssload-loading-center"></span>
      </li>
   </ul>
</div>
        </div>
        );

        export default Loader_rush;
        
        
         */
}
