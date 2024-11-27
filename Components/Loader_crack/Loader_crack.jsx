import React from "react";
import styles from "./Loader_crack.module.css";

const Loader_crack = () => (
  <div>
    <div className={styles["cube"]}>
      <div className={styles["topD"]}></div>
      <div>
        <span style="--i:0"></span>
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
      </div>

      <div className={styles["cube2"]}>
        <div>
          <span style="--i:0"></span>
          <span style="--i:1"></span>
          <span style="--i:2"></span>
          <span style="--i:3"></span>
        </div>

        <div className={styles["cube3"]}>
          <div className={styles["top3"]}></div>
          <div>
            <span style="--i:0"></span>
            <span style="--i:1"></span>
            <span style="--i:2"></span>
            <span style="--i:3"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_crack;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_crack = () => (
         <div>
          <div className="cube">
  <div className="topD"></div>
  <div>
    <span style="--i:0"></span>
    <span style="--i:1"></span>
    <span style="--i:2"></span>
    <span style="--i:3"></span>
  </div>

  <div className="cube2">
    <div>
      <span style="--i:0"></span>
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
    </div>

    <div className="cube3">
      <div className="top3"></div>
      <div>
        <span style="--i:0"></span>
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
      </div>

    </div>

  </div>
</div>
        </div>
        );

        export default Loader_crack;
        
        
         */
}
