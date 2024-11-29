import React from "react";
import styles from "./Loader_away.module.css";

const Loader_away = () => (
  <div>
    <div id="js-preloader" className={styles["js-preloader"]}>
      <div className={styles["preloader-inner"]}>
        <span className={styles["dot"]}></span>
        <div className={styles["dots"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_away;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_away = () => (
         <div>
          <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
  </div>
        </div>
        );

        export default Loader_away;
        
        
         */
}
