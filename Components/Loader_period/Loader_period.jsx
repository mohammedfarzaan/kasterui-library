import React from "react";
import styles from "./Loader_period.module.css";

const Loader_period = () => (
  <div>
    <div id="loader">
      <div className={styles["ls-particles"] + styles["ls-part-1"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-2"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-3"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-4"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-5"]}></div>
      <div
        className={
          styles["lightsaber"] + styles["ls-left"] + styles["ls-green"]
        }
      ></div>
      <div
        className={styles["lightsaber"] + styles["ls-right"] + styles["ls-red"]}
      ></div>
    </div>
  </div>
);

export default Loader_period;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_period = () => (
         <div>
          <div id="loader">
  <div className="ls-particles ls-part-1"></div>
  <div className="ls-particles ls-part-2"></div>
  <div className="ls-particles ls-part-3"></div>
  <div className="ls-particles ls-part-4"></div>
  <div className="ls-particles ls-part-5"></div>
  <div className="lightsaber ls-left ls-green"></div>
  <div className="lightsaber ls-right ls-red"></div>
</div>
        </div>
        );

        export default Loader_period;
        
        
         */
}
