import React from "react";
import styles from "./Button_doll.module.css";

const Button_doll = () => (
  <div>
    <button className={styles["btn"]}>Click Me</button>
  </div>
);

export default Button_doll;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_doll = () => (
         <div>
          <button className="btn">Click Me</button>
        </div>
        );

        export default Button_doll;
        
        
         */
}
