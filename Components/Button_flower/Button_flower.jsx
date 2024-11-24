import React from "react";
import styles from "./Button_flower.module.css";

const Button_flower = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["display"]}>
        <div id="msg">Click Me</div>
      </div>

      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_flower;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_flower = () => (
         <div>
          <button className="button">
  <div className="display">
    <div id="msg">Click Me</div>
  </div>
  
  <span></span>
  <span></span>
</button>
        </div>
        );

        export default Button_flower;
        
        
         */
}
