import React from "react";
import styles from "./Loader_were.module.css";

const Loader_were = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["hoop"]}></div>
      <div className={styles["sphere1"]}></div>
      <div className={styles["sphere2"]}></div>
    </div>
  </div>
);

export default Loader_were;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_were = () => (
         <div>
          <div className="wrapper">
		<div className="hoop"></div>
		<div className="sphere1"></div>
		<div className="sphere2"></div>	
	</div>
        </div>
        );

        export default Loader_were;
        
        
         */
}
