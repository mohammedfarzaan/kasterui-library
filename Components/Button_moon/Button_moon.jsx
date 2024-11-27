import React from "react";
import styles from "./Button_moon.module.css";

const Button_moon = () => (
  <div>
    <button className={styles["button10"]}>Button</button>
  </div>
);

export default Button_moon;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_moon = () => (
         <div>
          <button className="button10">Button</button>
        </div>
        );

        export default Button_moon;
        
        
         */
}
