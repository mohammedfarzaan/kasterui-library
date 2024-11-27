import React from "react";
import styles from "./Button_pot.module.css";

const Button_pot = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>About us</span>
      <span className={styles["span"]}>Hello!</span>
    </button>
  </div>
);

export default Button_pot;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pot = () => (
         <div>
          <button className="button">
  <span className="span">About us</span>
  <span className="span">Hello!</span>
</button>
        </div>
        );

        export default Button_pot;
        
        
         */
}
