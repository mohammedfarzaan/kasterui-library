import React from "react";
import styles from "./Loader_enough.module.css";

const Loader_enough = () => (
  <div>
    <div className={styles["spinner-box"]}>
      <div className={styles["circle-border"]}>
        <div className={styles["circle-core"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_enough;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_enough = () => (
         <div>
          <div className="spinner-box">
  <div className="circle-border">
    <div className="circle-core"></div>
  </div>  
</div>
        </div>
        );

        export default Loader_enough;
        
        
         */
}