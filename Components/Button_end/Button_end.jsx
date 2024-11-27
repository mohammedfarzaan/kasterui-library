import React from "react";
import styles from "./Button_end.module.css";

const Button_end = () => (
  <div>
    <button className={styles["elegant-button"]}>Click Me</button>
  </div>
);

export default Button_end;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_end = () => (
         <div>
          <button className="elegant-button">Click Me</button>
        </div>
        );

        export default Button_end;
        
        
         */
}
