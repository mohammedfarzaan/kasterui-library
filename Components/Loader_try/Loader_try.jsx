import React from "react";
import styles from "./Loader_try.module.css";

const Loader_try = () => (
  <div>
    <div className={styles["circ"]}>
      <div className={styles["load"]}>Loading . . . </div>
      <div className={styles["hands"]}></div>
      <div className={styles["body"]}></div>
      <div className={styles["head"]}>
        <div className={styles["eye"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_try;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_try = () => (
         <div>
          <div className="circ">
  <div className="load">Loading . . . </div>
  <div className="hands"></div>
  <div className="body"></div>
  <div className="head">
    <div className="eye"></div>
  </div>
</div>
        </div>
        );

        export default Loader_try;
        
        
         */
}
