import React from "react";
import styles from "./Loader_fellow.module.css";

const Loader_fellow = () => (
  <div>
    <div className={styles["cssloader"]}>
      <div className={styles["triangle1"]}></div>
      <div className={styles["triangle2"]}></div>
      <p className={styles["text"]}>Please Wait</p>
    </div>
  </div>
);

export default Loader_fellow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fellow = () => (
         <div>
          <div className="cssloader">
  <div className="triangle1"></div>
  <div className="triangle2"></div>
  <p className="text">Please Wait</p>
</div>
        </div>
        );

        export default Loader_fellow;
        
        
         */
}
