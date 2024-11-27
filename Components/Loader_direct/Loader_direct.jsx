import React from "react";
import styles from "./Loader_direct.module.css";

const Loader_direct = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cube"]}>
        <div className={styles["face1"]}></div>
        <div className={styles["face2"]}></div>
        <div className={styles["face3"]}></div>
        <div className={styles["face4"]}></div>
        <div className={styles["face5"]}></div>
        <div className={styles["face6"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_direct;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_direct = () => (
         <div>
          <div className="loader">
  <div className="cube">
    <div className="face1"></div>
    <div className="face2"></div>
    <div className="face3"></div>
    <div className="face4"></div>
    <div className="face5"></div>
    <div className="face6"></div>
  </div>
</div>
        </div>
        );

        export default Loader_direct;
        
        
         */
}
