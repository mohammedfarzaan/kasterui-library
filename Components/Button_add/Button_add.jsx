import React from "react";
import styles from "./Button_add.module.css";

const Button_add = () => (
  <div>
    <button className={styles["comic-button"]}>Click me!</button>
  </div>
);

export default Button_add;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_add = () => (
         <div>
          <button className="comic-button">Click me!</button>
        </div>
        );

        export default Button_add;
        
        
         */
}
