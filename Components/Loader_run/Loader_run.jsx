import React from "react";
import styles from "./Loader_run.module.css";

const Loader_run = () => (
  <div>
    <div className={styles["spooky-house"]}>
      <div className={styles["content-circle"]}>
        <div className={styles["house"]}>
          <div className={styles["porch"]}></div>
          <div className={styles["first-floor"]}></div>
          <div className={styles["second-floor"]}></div>
          <div className={styles["roof"]}></div>
          <div className={styles["door"]}></div>
          <div className={styles["small-windows"]}></div>
          <div className={styles["big-window"]}></div>
          <div className={styles["frames"]}></div>
        </div>
        <div className={styles["moon"]}></div>
        <div className={styles["rain"]}>
          <div className={styles["dropOne"]}></div>
          <div className={styles["dropTwo"]}></div>
          <div className={styles["dropThree"]}></div>
          <div className={styles["dropFour"]}></div>
          <div className={styles["dropFive"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_run;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_run = () => (
         <div>
          <div className="spooky-house">
  <div className="content-circle">
    <div className="house">
      <div className="porch"></div>
      <div className="first-floor"></div>
      <div className="second-floor"></div>
      <div className="roof"></div>
      <div className="door"></div>
      <div className="small-windows"></div>
      <div className="big-window"></div>
      <div className="frames"></div>
    </div>
    <div className="moon"></div>
    <div className="rain">
      <div className="dropOne"></div>
      <div className="dropTwo"></div>
      <div className="dropThree"></div>
      <div className="dropFour"></div>
      <div className="dropFive"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_run;
        
        
         */
}
