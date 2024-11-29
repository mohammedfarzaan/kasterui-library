import React from "react";
import styles from "./Loader_light.module.css";

const Loader_light = () => (
  <div>
    <div className={styles["loader"] + styles["JS_on"]}>
      <span className={styles["binary"]}></span>
      <span className={styles["binary"]}></span>
      <span className={styles["getting-there"]}>LOADING STUFF...</span>
    </div>
  </div>
);

export default Loader_light;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_light = () => (
         <div>
          <div className="loader JS_on">
	<span className="binary"></span>
	<span className="binary"></span>
	<span className="getting-there">LOADING STUFF...</span>
</div>
        </div>
        );

        export default Loader_light;
        
        
         */
}
