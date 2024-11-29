import React from "react";
import styles from "./Button_steam.module.css";

const Button_steam = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["btn"]}>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
);

export default Button_steam;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_steam = () => (
         <div>
          <div className="container">
    <div className="btn"><a href="#">Read More</a></div>
 </div>
        </div>
        );

        export default Button_steam;
        
        
         */
}
