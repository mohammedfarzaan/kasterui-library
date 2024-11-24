import React from "react";
import styles from "./Button_trail.module.css";

const Button_trail = () => (
  <div>
    <button className={styles["button"]}>Simple button</button>
  </div>
);

export default Button_trail;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_trail = () => (
         <div>
          <button className="button">Simple button</button>
        </div>
        );

        export default Button_trail;
        
        
         */
}