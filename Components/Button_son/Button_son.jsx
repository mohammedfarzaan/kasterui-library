import React from "react";
import styles from "./Button_son.module.css";

const Button_son = () => (
  <div>
    <button className={styles["comic-button"]}>Click me!</button>
  </div>
);

export default Button_son;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_son = () => (
         <div>
          <button className="comic-button">Click me!</button>
        </div>
        );

        export default Button_son;
        
        
         */
}
