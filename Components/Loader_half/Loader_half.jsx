import React from "react";
import styles from "./Loader_half.module.css";

const Loader_half = () => (
  <div>
    <div className={styles["loader-container"]}>
      <div className={styles["loader"]}>
        <div className={styles["face"] + styles["front"]}></div>
        <div className={styles["face"] + styles["back"]}></div>
        <div className={styles["face"] + styles["left"]}></div>
        <div className={styles["face"] + styles["right"]}></div>
        <div className={styles["face"] + styles["top"]}></div>
        <div className={styles["face"] + styles["bottom"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_half;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_half = () => (
         <div>
          <div className="loader-container">
    <div className="loader">
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  </div>
        </div>
        );

        export default Loader_half;
        
        
         */
}
