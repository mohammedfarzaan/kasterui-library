import React from "react";
import styles from "./Button_failed.module.css";

const Button_failed = () => (
  <div>
    <button className={styles["moves-button"]}>Hover me</button>
  </div>
);

export default Button_failed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_failed = () => (
         <div>
          <button className="moves-button">Hover me</button>
        </div>
        );

        export default Button_failed;
        
        
         */
}
