import React from "react";
import styles from "./Button_swing.module.css";

const Button_swing = () => (
  <div>
    <button className={styles["custom-button"]}>Click Me</button>
  </div>
);

export default Button_swing;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_swing = () => (
         <div>
          <button className="custom-button">Click Me</button>
        </div>
        );

        export default Button_swing;
        
        
         */
}
