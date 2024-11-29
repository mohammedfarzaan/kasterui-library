import React from "react";
import styles from "./Button_young.module.css";

const Button_young = () => (
  <div>
    <button className={styles["button"]}>BUTTON</button>
  </div>
);

export default Button_young;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_young = () => (
         <div>
          <button className="button">
  BUTTON
</button>
        </div>
        );

        export default Button_young;
        
        
         */
}
