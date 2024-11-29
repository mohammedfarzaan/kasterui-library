import React from "react";
import styles from "./Button_home.module.css";

const Button_home = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["join-now-button"]}>Join now</button>
    </div>
  </div>
);

export default Button_home;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_home = () => (
         <div>
          <div className="container">
  <button className="join-now-button">Join now</button>
</div>
        </div>
        );

        export default Button_home;
        
        
         */
}
