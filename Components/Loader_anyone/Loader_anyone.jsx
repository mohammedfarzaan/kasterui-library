import React from "react";
import styles from "./Loader_anyone.module.css";

const Loader_anyone = () => (
  <div>
    <div className={styles["dot-wave"]}>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
    </div>
  </div>
);

export default Loader_anyone;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_anyone = () => (
         <div>
          <div className="dot-wave">
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
</div>
        </div>
        );

        export default Loader_anyone;
        
        
         */
}
