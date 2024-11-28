import React from "react";
import styles from "./Button_has.module.css";

const Button_has = () => (
  <div>
    <button className={styles["animated-button"]}>Button</button>
  </div>
);

export default Button_has;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_has = () => (
         <div>
          <button className="animated-button">Button</button>
        </div>
        );

        export default Button_has;
        
        
         */
}
