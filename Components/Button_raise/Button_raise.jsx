import React from "react";
import styles from "./Button_raise.module.css";

const Button_raise = () => (
  <div>
    <button className={styles["button"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_raise;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_raise = () => (
         <div>
          <button className="button"><span>Button</span></button>
        </div>
        );

        export default Button_raise;
        
        
         */
}