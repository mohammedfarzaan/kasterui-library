import React from "react";
import styles from "./Button_using.module.css";

const Button_using = () => (
  <div>
    <button className={styles["button"]}>HOVER ME!</button>
  </div>
);

export default Button_using;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_using = () => (
         <div>
          <button className="button">HOVER ME!</button>
        </div>
        );

        export default Button_using;
        
        
         */
}
