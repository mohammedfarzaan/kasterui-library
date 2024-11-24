import React from "react";
import styles from "./Button_bee.module.css";

const Button_bee = () => (
  <div>
    <button className={styles["btn"] + styles["spacex-btn"]}>
      <span>Launch Rocket</span>
      <div className={styles["btn-bg"]}></div>
    </button>
  </div>
);

export default Button_bee;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_bee = () => (
         <div>
          <button className="btn spacex-btn">
  <span>Launch Rocket</span>
  <div className="btn-bg"></div>
</button>
        </div>
        );

        export default Button_bee;
        
        
         */
}
