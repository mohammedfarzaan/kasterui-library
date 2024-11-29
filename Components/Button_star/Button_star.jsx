import React from "react";
import styles from "./Button_star.module.css";

const Button_star = () => (
  <div>
    <button className={styles["btn"]}>
      <span>鬼滅の刃</span>
    </button>
  </div>
);

export default Button_star;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_star = () => (
         <div>
          <button className="btn"><span>鬼滅の刃</span></button>
        </div>
        );

        export default Button_star;
        
        
         */
}
