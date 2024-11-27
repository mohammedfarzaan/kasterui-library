import React from "react";
import styles from "./Button_facing.module.css";

const Button_facing = () => (
  <div>
    <button className={styles["custom-button"]}>Click me</button>
  </div>
);

export default Button_facing;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_facing = () => (
         <div>
          <button className="custom-button">Click me</button>
        </div>
        );

        export default Button_facing;
        
        
         */
}
