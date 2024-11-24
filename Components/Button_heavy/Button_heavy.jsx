import React from "react";
import styles from "./Button_heavy.module.css";

const Button_heavy = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["arrow"] + styles["right"]}></div>
      <div className={styles["text"]}>Learn More</div>
    </div>
  </div>
);

export default Button_heavy;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_heavy = () => (
         <div>
          <div className="box">
  <div className="arrow right"></div>
  <div className="text">Learn More</div>
</div>
        </div>
        );

        export default Button_heavy;
        
        
         */
}
