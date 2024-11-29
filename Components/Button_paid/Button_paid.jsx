import React from "react";
import styles from "./Button_paid.module.css";

const Button_paid = () => (
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

export default Button_paid;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_paid = () => (
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

        export default Button_paid;
        
        
         */
}
