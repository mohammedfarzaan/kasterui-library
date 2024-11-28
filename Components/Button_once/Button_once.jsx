import React from "react";
import styles from "./Button_once.module.css";

const Button_once = () => (
  <div>
    <button className={styles["ring-futuristic-button"]}>Click Me</button>
  </div>
);

export default Button_once;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_once = () => (
         <div>
          <button className="ring-futuristic-button">Click Me</button>
        </div>
        );

        export default Button_once;
        
        
         */
}
