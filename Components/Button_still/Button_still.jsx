import React from "react";
import styles from "./Button_still.module.css";

const Button_still = () => (
  <div>
    <button className={styles["button"]}>hover me !</button>
  </div>
);

export default Button_still;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_still = () => (
         <div>
          <button className="button">hover me !</button>
        </div>
        );

        export default Button_still;
        
        
         */
}
