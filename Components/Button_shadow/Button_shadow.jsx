import React from "react";
import styles from "./Button_shadow.module.css";

const Button_shadow = () => (
  <div>
    <button className={styles["button"]} role="button">
      Happy Coding!
    </button>
  </div>
);

export default Button_shadow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_shadow = () => (
         <div>
          <button className="button" role="button">Happy Coding!</button>
        </div>
        );

        export default Button_shadow;
        
        
         */
}
