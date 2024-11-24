import React from "react";
import styles from "./Button_grown.module.css";

const Button_grown = () => (
  <div>
    <button className={styles["animated-button"]}>hover me</button>
  </div>
);

export default Button_grown;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_grown = () => (
         <div>
          <button className="animated-button">hover me</button>
        </div>
        );

        export default Button_grown;
        
        
         */
}
