import React from "react";
import styles from "./Button_lady.module.css";

const Button_lady = () => (
  <div>
    <button className={styles["my-button"]}>Click Me</button>
  </div>
);

export default Button_lady;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lady = () => (
         <div>
          <button className="my-button">Click Me</button>
        </div>
        );

        export default Button_lady;
        
        
         */
}
