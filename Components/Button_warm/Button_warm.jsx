import React from "react";
import styles from "./Button_warm.module.css";

const Button_warm = () => (
  <div>
    <button className={styles["bn"]}>Hover!</button>
  </div>
);

export default Button_warm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_warm = () => (
         <div>
          <button className="bn">Hover!</button>
        </div>
        );

        export default Button_warm;
        
        
         */
}
