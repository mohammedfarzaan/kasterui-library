import React from "react";
import styles from "./Loader_aside.module.css";

const Loader_aside = () => (
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

export default Loader_aside;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_aside = () => (
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

        export default Loader_aside;
        
        
         */
}
