import React from "react";
import styles from "./Button_right.module.css";

const Button_right = () => (
  <div>
    <button className={styles["fancy-button"]}>Click Me!</button>
  </div>
);

export default Button_right;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_right = () => (
         <div>
          <button className="fancy-button">Click Me!</button>
        </div>
        );

        export default Button_right;
        
        
         */
}
