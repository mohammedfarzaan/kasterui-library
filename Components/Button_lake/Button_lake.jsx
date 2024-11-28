import React from "react";
import styles from "./Button_lake.module.css";

const Button_lake = () => (
  <div>
    <div tabindex="0" className={styles["signInButton"]}>
      <p className={styles["signInButtonText"]}>Sign In</p>
    </div>
  </div>
);

export default Button_lake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lake = () => (
         <div>
          <div tabindex="0" className="signInButton">
  <p className="signInButtonText">Sign In</p>
</div>
        </div>
        );

        export default Button_lake;
        
        
         */
}
