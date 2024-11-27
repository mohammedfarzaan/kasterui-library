import React from "react";
import styles from "./Button_fuel.module.css";

const Button_fuel = () => (
  <div>
    <button className={styles["btn"]}>Click Me</button>
  </div>
);

export default Button_fuel;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_fuel = () => (
         <div>
          <button className="btn">Click Me</button>
        </div>
        );

        export default Button_fuel;
        
        
         */
}
