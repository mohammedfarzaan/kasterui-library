import React from "react";
import styles from "./Button_dull.module.css";

const Button_dull = () => (
  <div>
    <button className={styles["button"]}>Button</button>
  </div>
);

export default Button_dull;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_dull = () => (
         <div>
          <button className="button">Button</button>
        </div>
        );

        export default Button_dull;
        
        
         */
}
