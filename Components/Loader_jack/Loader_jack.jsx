import React from "react";
import styles from "./Loader_jack.module.css";

const Loader_jack = () => (
  <div>
    <div className={styles["cube-loader"]}>
      <div className={styles["cube-top"]}></div>
      <div className={styles["cube-wrapper"]}>
        <span style="--i:0" className={styles["cube-span"]}></span>
        <span style="--i:1" className={styles["cube-span"]}></span>
        <span style="--i:2" className={styles["cube-span"]}></span>
        <span style="--i:3" className={styles["cube-span"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_jack;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_jack = () => (
         <div>
          <div className="cube-loader">
  <div className="cube-top"></div>
  <div className="cube-wrapper">
    <span style="--i:0" className="cube-span"></span>
    <span style="--i:1" className="cube-span"></span>
    <span style="--i:2" className="cube-span"></span>
    <span style="--i:3" className="cube-span"></span>
  </div>
</div>
        </div>
        );

        export default Loader_jack;
        
        
         */
}
