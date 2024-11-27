import React from "react";
import styles from "./Button_inside.module.css";

const Button_inside = () => (
  <div>
    <button className={styles["custom-button"]}>Click Me</button>
  </div>
);

export default Button_inside;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_inside = () => (
         <div>
          <button className="custom-button">Click Me</button>
        </div>
        );

        export default Button_inside;
        
        
         */
}
