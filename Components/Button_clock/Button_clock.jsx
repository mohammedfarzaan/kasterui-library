import React from "react";
import styles from "./Button_clock.module.css";

const Button_clock = () => (
  <div>
    <div className={styles["scene"]}>
      <div className={styles["cube"]}>
        <span className={styles["side"] + styles["top"]}>Easter</span>
        <span className={styles["side"] + styles["front"]}>Happy</span>
      </div>
    </div>
  </div>
);

export default Button_clock;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_clock = () => (
         <div>
          <div className="scene">
  <div className="cube">
    <span className="side top">Easter</span>
    <span className="side front">Happy</span>
  </div>
</div>
        </div>
        );

        export default Button_clock;
        
        
         */
}
