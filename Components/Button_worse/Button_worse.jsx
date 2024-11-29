import React from "react";
import styles from "./Button_worse.module.css";

const Button_worse = () => (
  <div>
    <button className={styles["button"] + styles["type1"]}></button>
  </div>
);

export default Button_worse;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_worse = () => (
         <div>
          <button className="button type1">
</button>
        </div>
        );

        export default Button_worse;
        
        
         */
}
