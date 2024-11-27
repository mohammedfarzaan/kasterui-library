import React from "react";
import styles from "./Loader_around.module.css";

const Loader_around = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["cloud"]}>
        <div className={styles["cloud_left"]}></div>
        <div className={styles["cloud_right"]}></div>
      </div>
      <div className={styles["rain"]}>
        <div className={styles["drop"]}></div>
        <div className={styles["drop"]}></div>
        <div className={styles["drop"]}></div>
        <div className={styles["drop"]}></div>
        <div className={styles["drop"]}></div>
      </div>
      <div className={styles["surface"]}>
        <div className={styles["hit"]}></div>
        <div className={styles["hit"]}></div>
        <div className={styles["hit"]}></div>
        <div className={styles["hit"]}></div>
        <div className={styles["hit"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_around;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_around = () => (
         <div>
          <div className="wrapper">
  <div className="cloud">
    <div className="cloud_left"></div>
    <div className="cloud_right"></div>
  </div>
  <div className="rain">
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
  </div>
  <div className="surface">
    <div className="hit"></div>
    <div className="hit"></div>
    <div className="hit"></div>
    <div className="hit"></div>
    <div className="hit"></div>
  </div>
</div>
        </div>
        );

        export default Loader_around;
        
        
         */
}
