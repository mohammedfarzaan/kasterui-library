import React from "react";
import styles from "./Button_guard.module.css";

const Button_guard = () => (
  <div>
    <button className={styles["primary-button"]}>Primary button</button>
  </div>
);

export default Button_guard;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_guard = () => (
         <div>
          <button className="primary-button">
  Primary button
</button>
        </div>
        );

        export default Button_guard;
        
        
         */
}
