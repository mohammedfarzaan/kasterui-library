import React from "react";
import styles from "./Button_led.module.css";

const Button_led = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button-content"]}>Download </span>
    </button>
  </div>
);

export default Button_led;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_led = () => (
         <div>
          <button className="button">
    <span className="button-content">Download </span>
</button>
        </div>
        );

        export default Button_led;
        
        
         */
}
