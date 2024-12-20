import React from "react";
import styles from "./Loader_army.module.css";

const Loader_army = () => (
  <div>
    <div className={styles["spinner-box"]}>
      <div className={styles["configure-border-1"]}>
        <div className={styles["configure-core"]}></div>
      </div>
      <div className={styles["configure-border-2"]}>
        <div className={styles["configure-core"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_army;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_army = () => (
         <div>
          <div className="spinner-box">
  <div className="configure-border-1">  
    <div className="configure-core"></div>
  </div>  
  <div className="configure-border-2">
    <div className="configure-core"></div>
  </div> 
</div>
        </div>
        );

        export default Loader_army;
        
        
         */
}
