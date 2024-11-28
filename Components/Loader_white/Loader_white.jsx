import React from "react";
import styles from "./Loader_white.module.css";

const Loader_white = () => (
  <div>
    <section className={styles["loader"]}>
      <div className={styles["slider"]} style="--i:0"></div>
      <div className={styles["slider"]} style="--i:1"></div>
      <div className={styles["slider"]} style="--i:2"></div>
      <div className={styles["slider"]} style="--i:3"></div>
      <div className={styles["slider"]} style="--i:4"></div>
    </section>
  </div>
);

export default Loader_white;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_white = () => (
         <div>
          <section className="loader">

    <div className="slider" style="--i:0">
    </div>
    <div className="slider" style="--i:1">
    </div>
    <div className="slider" style="--i:2">
    </div>
    <div className="slider" style="--i:3">
    </div>
    <div className="slider" style="--i:4">
    </div>
  </section>
        </div>
        );

        export default Loader_white;
        
        
         */
}
