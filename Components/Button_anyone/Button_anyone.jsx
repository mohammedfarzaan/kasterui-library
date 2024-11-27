import React from "react";
import styles from "./Button_anyone.module.css";

const Button_anyone = () => (
  <div>
    <button className={styles["button"]}>Sign Up</button>
  </div>
);

export default Button_anyone;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_anyone = () => (
         <div>
          <button className="button">Sign Up</button>
        </div>
        );

        export default Button_anyone;
        
        
         */
}
