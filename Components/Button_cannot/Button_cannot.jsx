import React from "react";
import styles from "./Button_cannot.module.css";

const Button_cannot = () => (
  <div>
    <button className={styles["Btn"]}>Click Me</button>
  </div>
);

export default Button_cannot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cannot = () => (
         <div>
          <button className="Btn">Click Me</button>
        </div>
        );

        export default Button_cannot;
        
        
         */
}