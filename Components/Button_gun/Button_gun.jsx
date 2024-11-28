import React from "react";
import styles from "./Button_gun.module.css";

const Button_gun = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-1"]}>Hello!</button>
  </div>
);

export default Button_gun;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_gun = () => (
         <div>
          <button className="custom-btn btn-1">Hello!</button>
        </div>
        );

        export default Button_gun;
        
        
         */
}
