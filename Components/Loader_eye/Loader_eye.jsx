import React from "react";
import styles from "./Loader_eye.module.css";

const Loader_eye = () => (
  <div>
    <div className={styles["anim-box"]}>
      <div className={styles["anim-interieur"]}>
        <div className={styles["rect"] + styles["rect1"]}></div>
        <div className={styles["rect"] + styles["rect2"]}></div>
        <div className={styles["rect"] + styles["rect3"]}></div>
        <div className={styles["rect"] + styles["rect4"]}></div>
        <div className={styles["rect"] + styles["rect5"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_eye;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_eye = () => (
         <div>
          <div className="anim-box">
        <div className="anim-interieur">
            <div className="rect rect1"></div>
            <div className="rect rect2"></div>
            <div className="rect rect3"></div>
            <div className="rect rect4"></div>
            <div className="rect rect5"></div>
        </div>
    </div>
        </div>
        );

        export default Loader_eye;
        
        
         */
}
