import React from "react";
import styles from "./Button_mine.module.css";

const Button_mine = () => (
  <div>
    <button className={styles["btn-space"] + styles["space"]}>Button</button>
  </div>
);

export default Button_mine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_mine = () => (
         <div>
          <button className="btn-space space">
  Button
</button>
        </div>
        );

        export default Button_mine;
        
        
         */
}
