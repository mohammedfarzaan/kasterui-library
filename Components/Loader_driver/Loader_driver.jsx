import React from "react";
import styles from "./Loader_driver.module.css";

const Loader_driver = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader-cube"]}>
        <div className={styles["loader-side"] + styles["front"]}></div>
        <div className={styles["loader-side"] + styles["back"]}></div>
        <div className={styles["loader-side"] + styles["left"]}></div>
        <div className={styles["loader-side"] + styles["right"]}></div>
        <div className={styles["loader-side"] + styles["top"]}></div>
        <div className={styles["loader-side"] + styles["bottom"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_driver;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_driver = () => (
         <div>
          <div className="loader-container">
  <div className="loader-cube">
    <div className="loader-side front"></div>
    <div className="loader-side back"></div>
    <div className="loader-side left"></div>
    <div className="loader-side right"></div>
    <div className="loader-side top"></div>
    <div className="loader-side bottom"></div>
  </div>
</div>
        </div>
        );

        export default Loader_driver;
        
        
         */
}
