import React from "react";
import styles from "./Button_thrown.module.css";

const Button_thrown = () => (
  <div>
    <button className={styles["cyberpunk-button"]}>Click me</button>
  </div>
);

export default Button_thrown;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_thrown = () => (
         <div>
          <button className="cyberpunk-button">Click me</button>
        </div>
        );

        export default Button_thrown;
        
        
         */
}
