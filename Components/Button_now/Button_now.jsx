import React from "react";
import styles from "./Button_now.module.css";

const Button_now = () => (
  <div>
    <button className={styles["Btn"]}>Join now</button>
  </div>
);

export default Button_now;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_now = () => (
         <div>
          <button className="Btn">
  Join now
</button>
        </div>
        );

        export default Button_now;
        
        
         */
}
