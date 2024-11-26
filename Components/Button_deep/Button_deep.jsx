import React from "react";
import styles from "./Button_deep.module.css";

const Button_deep = () => (
  <div>
    <button className={styles["wave-button"]}>Click me</button>
  </div>
);

export default Button_deep;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_deep = () => (
         <div>
          <button className="wave-button">Click me</button>
        </div>
        );

        export default Button_deep;
        
        
         */
}
