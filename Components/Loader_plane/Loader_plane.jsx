import React from "react";
import styles from "./Loader_plane.module.css";

const Loader_plane = () => (
  <div>
    <div className={styles["orbital"]}>
      <div className={styles["ringOne"]}></div>
      <div className={styles["ringTwo"]}></div>
      <div className={styles["ringThree"]}></div>
      <div className={styles["core"]}></div>
      <div className={styles["spin"]}></div>
    </div>
  </div>
);

export default Loader_plane;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_plane = () => (
         <div>
          <div className="orbital">
  <div className="ringOne"></div>
  <div className="ringTwo"></div>
  <div className="ringThree"></div>
  <div className="core"></div>
  <div className="spin"></div>
</div>
        </div>
        );

        export default Loader_plane;
        
        
         */
}
