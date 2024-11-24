import React from "react";
import styles from "./Button_wait.module.css";

const Button_wait = () => (
  <div>
    <button className={styles["button"]}>
      <span>Button</span>
      <div className={styles["overlay"]}></div>
      <div className={styles["shine"]}></div>
    </button>
  </div>
);

export default Button_wait;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wait = () => (
         <div>
          <button className="button">
  <span>Button</span>
  <div className="overlay"></div>
  <div className="shine"></div>
</button>
        </div>
        );

        export default Button_wait;
        
        
         */
}