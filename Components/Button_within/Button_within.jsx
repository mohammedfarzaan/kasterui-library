import React from "react";
import styles from "./Button_within.module.css";

const Button_within = () => (
  <div>
    <button className={styles["button"]}>Click me !</button>
  </div>
);

export default Button_within;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_within = () => (
         <div>
          <button className="button">Click me !</button>
        </div>
        );

        export default Button_within;
        
        
         */
}
