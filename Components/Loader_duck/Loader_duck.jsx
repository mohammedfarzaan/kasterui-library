import React from "react";
import styles from "./Loader_duck.module.css";

const Loader_duck = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["cube"]}>
        <div className={styles["side"] + styles["front"]}></div>
        <div className={styles["side"] + styles["back"]}></div>
        <div className={styles["side"] + styles["top"]}></div>
        <div className={styles["side"] + styles["bottom"]}></div>
        <div className={styles["side"] + styles["left"]}></div>
        <div className={styles["side"] + styles["right"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_duck;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_duck = () => (
         <div>
          <div className="loading">
  <div className="cube">
    <div className="side front"></div>
    <div className="side back"></div>
    <div className="side top"></div>
    <div className="side bottom"></div>
    <div className="side left"></div>
    <div className="side right"></div>
  </div>
</div>
        </div>
        );

        export default Loader_duck;
        
        
         */
}
