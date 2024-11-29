import React from "react";
import styles from "./Button_basic.module.css";

const Button_basic = () => (
  <div>
    <button className={styles["realistic-button"]}>Button</button>
  </div>
);

export default Button_basic;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_basic = () => (
         <div>
          <button className="realistic-button">
  Button
</button>
        </div>
        );

        export default Button_basic;
        
        
         */
}
