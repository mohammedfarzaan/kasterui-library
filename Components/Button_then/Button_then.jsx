import React from "react";
import styles from "./Button_then.module.css";

const Button_then = () => (
  <div>
    <button className={styles["comic-btn"]}>Click me!</button>
  </div>
);

export default Button_then;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_then = () => (
         <div>
          <button className="comic-btn">Click me!</button>
        </div>
        );

        export default Button_then;
        
        
         */
}
