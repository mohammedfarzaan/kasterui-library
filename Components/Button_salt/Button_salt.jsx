import React from "react";
import styles from "./Button_salt.module.css";

const Button_salt = () => (
  <div>
    <button className={styles["fancy-button"]}>Click Me!</button>
  </div>
);

export default Button_salt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_salt = () => (
         <div>
          <button className="fancy-button">Click Me!</button>
        </div>
        );

        export default Button_salt;
        
        
         */
}
