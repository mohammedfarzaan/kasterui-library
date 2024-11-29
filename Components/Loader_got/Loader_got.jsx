import React from "react";
import styles from "./Loader_got.module.css";

const Loader_got = () => (
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

export default Loader_got;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_got = () => (
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

        export default Loader_got;
        
        
         */
}
