import React from "react";
import styles from "./Button_calm.module.css";

const Button_calm = () => (
  <div>
    <button className={styles["button"]}>Vite Button</button>
  </div>
);

export default Button_calm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_calm = () => (
         <div>
          <button className="button">
  Vite Button
</button>
        </div>
        );

        export default Button_calm;
        
        
         */
}
