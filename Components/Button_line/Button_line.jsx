import React from "react";
import styles from "./Button_line.module.css";

const Button_line = () => (
  <div>
    <button className={styles["comic-button"]}>Click me!</button>
  </div>
);

export default Button_line;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_line = () => (
         <div>
          <button className="comic-button">Click me!</button>
        </div>
        );

        export default Button_line;
        
        
         */
}
