import React from "react";
import styles from "./Button_lamp.module.css";

const Button_lamp = () => (
  <div>
    <button className={styles["button"]}>Enter the game</button>
  </div>
);

export default Button_lamp;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lamp = () => (
         <div>
          <button className="button">Enter the game</button>
        </div>
        );

        export default Button_lamp;
        
        
         */
}
