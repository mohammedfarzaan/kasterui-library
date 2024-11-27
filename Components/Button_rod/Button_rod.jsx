import React from "react";
import styles from "./Button_rod.module.css";

const Button_rod = () => (
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

export default Button_rod;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_rod = () => (
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

        export default Button_rod;
        
        
         */
}
