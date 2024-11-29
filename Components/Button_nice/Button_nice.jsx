import React from "react";
import styles from "./Button_nice.module.css";

const Button_nice = () => (
  <div>
    <button className={styles["custom-button"]}>Click me</button>
  </div>
);

export default Button_nice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_nice = () => (
         <div>
          <button className="custom-button">Click me</button>
        </div>
        );

        export default Button_nice;
        
        
         */
}
