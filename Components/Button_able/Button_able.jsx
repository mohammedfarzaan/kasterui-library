import React from "react";
import styles from "./Button_able.module.css";

const Button_able = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["btn"]}>
        <div className={styles["sides"] + styles["top"]}>BUTTON</div>
        <div className={styles["sides"] + styles["front"]}></div>
      </div>
    </div>
  </div>
);

export default Button_able;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_able = () => (
         <div>
          <div className="container">
  <div className="btn">
    <div className="sides top">
      BUTTON
    </div>
    <div className="sides front"></div>
  </div>
</div>
        </div>
        );

        export default Button_able;
        
        
         */
}
