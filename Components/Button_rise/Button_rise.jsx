import React from "react";
import styles from "./Button_rise.module.css";

const Button_rise = () => (
  <div>
    <button className={styles["button"]}>Button</button>

    <footer></footer>
  </div>
);

export default Button_rise;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_rise = () => (
         <div>
          <button className="button">Button</button>

<footer></footer>
        </div>
        );

        export default Button_rise;
        
        
         */
}
