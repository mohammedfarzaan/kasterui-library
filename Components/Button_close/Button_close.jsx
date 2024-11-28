import React from "react";
import styles from "./Button_close.module.css";

const Button_close = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["button"]}>Button</button>
    </div>
  </div>
);

export default Button_close;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_close = () => (
         <div>
          <div className="container">
  <button className="button">
    Button
  </button>
</div>
        </div>
        );

        export default Button_close;
        
        
         */
}
