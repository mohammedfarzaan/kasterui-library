import React from "react";
import styles from "./Button_hurt.module.css";

const Button_hurt = () => (
  <div>
    <button className={styles["comic-btn"]}>Click me!</button>
  </div>
);

export default Button_hurt;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_hurt = () => (
         <div>
          <button className="comic-btn">Click me!</button>
        </div>
        );

        export default Button_hurt;
        
        
         */
}
