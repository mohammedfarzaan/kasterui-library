import React from "react";
import styles from "./Loader_worth.module.css";

const Loader_worth = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["pencil"]}>
        <p>Loading...</p>
        <div className={styles["top"]}></div>
      </div>
      <div className={styles["stroke"]}></div>
    </div>
  </div>
);

export default Loader_worth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_worth = () => (
         <div>
          <div className="loader">
        <div className="pencil">
            <p>Loading...</p>
            <div className="top"></div>
        </div>
        <div className="stroke">
        </div>
    </div>
        </div>
        );

        export default Loader_worth;
        
        
         */
}
