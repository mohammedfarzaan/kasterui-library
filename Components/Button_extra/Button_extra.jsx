import React from "react";
import styles from "./Button_extra.module.css";

const Button_extra = () => (
  <div>
    <button className={styles["learn-more"]}>
      <span className={styles["circle"]} aria-hidden="true">
        <span className={styles["icon"] + styles["arrow"]}></span>
      </span>
      <span className={styles["button-text"]}>Learn More</span>
    </button>
  </div>
);

export default Button_extra;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_extra = () => (
         <div>
          <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Learn More</span>
</button>
        </div>
        );

        export default Button_extra;
        
        
         */
}
