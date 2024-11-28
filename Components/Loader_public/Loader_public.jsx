import React from "react";
import styles from "./Loader_public.module.css";

const Loader_public = () => (
  <div>
    <div className={styles["hacker-loader"]}>
      <div className={styles["loader-text"]}>
        <span data-text="Initializing..." className={styles["text-glitch"]}>
          Initializing...
        </span>
      </div>
      <div className={styles["loader-bar"]}>
        <div className={styles["bar-fill"]}></div>
        <div className={styles["bar-glitch"]}></div>
      </div>
      <div className={styles["particles"]}>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
        <div className={styles["particle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_public;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_public = () => (
         <div>
          <div className="hacker-loader">
  <div className="loader-text">
    <span data-text="Initializing..." className="text-glitch">Initializing...</span>
  </div>
  <div className="loader-bar">
    <div className="bar-fill"></div>
    <div className="bar-glitch"></div>
  </div>
  <div className="particles">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>
</div>
        </div>
        );

        export default Loader_public;
        
        
         */
}
