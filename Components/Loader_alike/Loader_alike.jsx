import React from "react";
import styles from "./Loader_alike.module.css";

const Loader_alike = () => (
  <div>
    <div className={styles["dot-wave"]}>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
    </div>
  </div>
);

export default Loader_alike;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_alike = () => (
         <div>
          <div className="dot-wave">
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
</div>
        </div>
        );

        export default Loader_alike;
        
        
         */
}
