import React from "react";
import styles from "./Button_full.module.css";

const Button_full = () => (
  <div>
    <button className={styles["btn"]}>Diagonal Swipe</button>
  </div>
);

export default Button_full;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_full = () => (
         <div>
          <button className="btn">
  Diagonal Swipe
</button>
        </div>
        );

        export default Button_full;
        
        
         */
}
