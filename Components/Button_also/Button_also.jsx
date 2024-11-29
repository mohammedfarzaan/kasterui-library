import React from "react";
import styles from "./Button_also.module.css";

const Button_also = () => (
  <div>
    <button className={styles["gradient-button"]}>⚡ Join now</button>
  </div>
);

export default Button_also;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_also = () => (
         <div>
          <button className="gradient-button">⚡ Join now</button>
        </div>
        );

        export default Button_also;
        
        
         */
}
