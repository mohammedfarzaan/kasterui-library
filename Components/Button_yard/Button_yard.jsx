import React from "react";
import styles from "./Button_yard.module.css";

const Button_yard = () => (
  <div>
    <button className={styles["button"]}>Click Me</button>
  </div>
);

export default Button_yard;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_yard = () => (
         <div>
          <button className="button">Click Me</button>
        </div>
        );

        export default Button_yard;
        
        
         */
}