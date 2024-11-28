import React from "react";
import styles from "./Button_string.module.css";

const Button_string = () => (
  <div>
    <button className={styles["custom-button"]}>Click Me</button>
  </div>
);

export default Button_string;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_string = () => (
         <div>
          <button className="custom-button">Click Me</button>
        </div>
        );

        export default Button_string;
        
        
         */
}
