import React from "react";
import styles from "./Button_cloud.module.css";

const Button_cloud = () => (
  <div>
    <button>
      P L A Y
      <div id="clip">
        <div id="leftTop" className={styles["corner"]}></div>
        <div id="rightBottom" className={styles["corner"]}></div>
        <div id="rightTop" className={styles["corner"]}></div>
        <div id="leftBottom" className={styles["corner"]}></div>
      </div>
      <span id="rightArrow" className={styles["arrow"]}></span>
      <span id="leftArrow" className={styles["arrow"]}></span>
    </button>
  </div>
);

export default Button_cloud;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cloud = () => (
         <div>
          <button>
    P L A Y
    <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
    </div>
    <span id="rightArrow" className="arrow"></span>
    <span id="leftArrow" className="arrow"></span>
</button>
        </div>
        );

        export default Button_cloud;
        
        
         */
}
