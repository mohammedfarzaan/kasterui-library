import React from "react";
import styles from "./Button_chair.module.css";

const Button_chair = () => (
  <div>
    <button className={styles["complex-button"]}>HOVER ME</button>
  </div>
);

export default Button_chair;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_chair = () => (
         <div>
          <button className="complex-button">HOVER ME</button>
        </div>
        );

        export default Button_chair;
        
        
         */
}
