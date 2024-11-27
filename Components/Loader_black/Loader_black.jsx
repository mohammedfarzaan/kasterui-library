import React from "react";
import styles from "./Loader_black.module.css";

const Loader_black = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cube"]}>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
        <div className={styles["face"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_black;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_black = () => (
         <div>
          <div className="loader">
    <div className="cube">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
    </div>
</div>
        </div>
        );

        export default Loader_black;
        
        
         */
}
