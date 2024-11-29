import React from "react";
import styles from "./Button_scale.module.css";

const Button_scale = () => (
  <div>
    <button>
      <span>Button</span>
      <div className={styles["top"]}></div>
      <div className={styles["left"]}></div>
      <div className={styles["bottom"]}></div>
      <div className={styles["right"]}></div>
    </button>
  </div>
);

export default Button_scale;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_scale = () => (
         <div>
          <button>
    <span>Button</span>
    <div className="top"></div>
    <div className="left"></div>
    <div className="bottom"></div>
    <div className="right"></div>
</button>
        </div>
        );

        export default Button_scale;
        
        
         */
}
