import React from "react";
import styles from "./Button_volume.module.css";

const Button_volume = () => (
  <div>
    <button className={styles["complex-animated-button"]}>Click me</button>
  </div>
);

export default Button_volume;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_volume = () => (
         <div>
          <button className="complex-animated-button">Click me</button>
        </div>
        );

        export default Button_volume;
        
        
         */
}
