import React from "react";
import styles from "./Button_coat.module.css";

const Button_coat = () => (
  <div>
    <button className={styles["button"]}>ALT</button>
  </div>
);

export default Button_coat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_coat = () => (
         <div>
          <button className="button">
ALT
</button>
        </div>
        );

        export default Button_coat;
        
        
         */
}
