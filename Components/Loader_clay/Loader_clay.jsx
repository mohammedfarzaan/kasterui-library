import React from "react";
import styles from "./Loader_clay.module.css";

const Loader_clay = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["pattern-1"]}>
        <div className={styles["pattern-1-shade"]}></div>
      </div>
      <div className={styles["pattern-2"]}></div>
    </div>
  </div>
);

export default Loader_clay;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_clay = () => (
         <div>
          <div className="loader">
  <div className="pattern-1">
    <div className="pattern-1-shade"></div>
  </div>
  <div className="pattern-2"></div>
</div>
        </div>
        );

        export default Loader_clay;
        
        
         */
}
