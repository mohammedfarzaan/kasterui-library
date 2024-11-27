import React from "react";
import styles from "./Loader_sky.module.css";

const Loader_sky = () => (
  <div>
    <div className={styles["dot-wave"]}>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
      <div className={styles["dot-wave__dot"]}></div>
    </div>
  </div>
);

export default Loader_sky;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_sky = () => (
         <div>
          <div className="dot-wave">
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
    <div className="dot-wave__dot"></div>
</div>
        </div>
        );

        export default Loader_sky;
        
        
         */
}
