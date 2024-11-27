import React from "react";
import styles from "./Loader_but.module.css";

const Loader_but = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["cloud"] + styles["front"]}>
        <span className={styles["left-front"]}></span>
        <span className={styles["right-front"]}></span>
      </div>
      <span className={styles["sun"] + styles["sunshine"]}></span>
      <span className={styles["sun"]}></span>
      <div className={styles["cloud"] + styles["back"]}>
        <span className={styles["left-back"]}></span>
        <span className={styles["right-back"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_but;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_but = () => (
         <div>
          <div className="container">
  <div className="cloud front">
    <span className="left-front"></span>
    <span className="right-front"></span>
  </div>
  <span className="sun sunshine"></span>
  <span className="sun"></span>
  <div className="cloud back">
    <span className="left-back"></span>
    <span className="right-back"></span>
  </div>
</div>
        </div>
        );

        export default Loader_but;
        
        
         */
}
