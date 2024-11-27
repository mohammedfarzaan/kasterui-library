import React from "react";
import styles from "./Button_earn.module.css";

const Button_earn = () => (
  <div>
    <button className={styles["glow-on-hover"]} type="button">
      HOVER ME, THEN CLICK ME!
    </button>
  </div>
);

export default Button_earn;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_earn = () => (
         <div>
          <button className="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button>
        </div>
        );

        export default Button_earn;
        
        
         */
}
