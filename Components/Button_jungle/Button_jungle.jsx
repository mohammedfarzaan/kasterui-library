import React from "react";
import styles from "./Button_jungle.module.css";

const Button_jungle = () => (
  <div>
    <button className={styles["cyberpunk-button"]}>Click me</button>
  </div>
);

export default Button_jungle;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_jungle = () => (
         <div>
          <button className="cyberpunk-button">Click me</button>
        </div>
        );

        export default Button_jungle;
        
        
         */
}