import React from "react";
import styles from "./Loader_plane.module.css";

const Loader_plane = () => (
  <div>
    <div className={styles["loader2"]}>
      <div className={styles["load21"]}></div>
      <div className={styles["load22"]}></div>
      <div className={styles["load23"]}></div>
      <div className={styles["load24"]}></div>
      <div className={styles["load25"]}></div>
    </div>
  </div>
);

export default Loader_plane;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_plane = () => (
         <div>
          <div className="loader2">
  <div className="load21"></div>
  <div className="load22"></div>
  <div className="load23"></div>
  <div className="load24"></div>
  <div className="load25"></div>
</div>
        </div>
        );

        export default Loader_plane;
        
        
         */
}
