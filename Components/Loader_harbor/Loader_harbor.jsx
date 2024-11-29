import React from "react";
import styles from "./Loader_harbor.module.css";

const Loader_harbor = () => (
  <div>
    <div className={styles["eye"]}>
      <div className={styles["up"]}></div>
      <div className={styles["mid"]}></div>
      <div className={styles["down"]}></div>
    </div>
  </div>
);

export default Loader_harbor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_harbor = () => (
         <div>
          <div className="eye">
    <div className="up"></div>
    <div className="mid"></div> 
    <div className="down"></div> 
</div>
        </div>
        );

        export default Loader_harbor;
        
        
         */
}
