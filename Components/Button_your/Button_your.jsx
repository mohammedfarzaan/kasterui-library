import React from "react";
import styles from "./Button_your.module.css";

const Button_your = () => (
  <div>
    <button className={styles["button"]}>CLICK ME</button>
  </div>
);

export default Button_your;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_your = () => (
         <div>
          <button className="button">
  CLICK ME
</button>
        </div>
        );

        export default Button_your;
        
        
         */
}
