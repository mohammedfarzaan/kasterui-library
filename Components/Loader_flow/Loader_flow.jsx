import React from "react";
import styles from "./Loader_flow.module.css";

const Loader_flow = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["item"]}></span>
      <span className={styles["item"]}></span>
      <span className={styles["item"]}></span>
      <span className={styles["item"]}></span>
    </div>
  </div>
);

export default Loader_flow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_flow = () => (
         <div>
          <div className="loader">
  <span className="item"></span>
  <span className="item"></span>
  <span className="item"></span>
  <span className="item"></span>
</div>
        </div>
        );

        export default Loader_flow;
        
        
         */
}
