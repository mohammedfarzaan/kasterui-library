import React from "react";
import styles from "./Button_hot.module.css";

const Button_hot = () => (
  <div>
    <button className={styles["my-button"]}>Click Me</button>
  </div>
);

export default Button_hot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hot = () => (
         <div>
          <button className="my-button">Click Me</button>
        </div>
        );

        export default Button_hot;
        
        
         */
}
