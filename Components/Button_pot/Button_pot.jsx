import React from "react";
import styles from "./Button_pot.module.css";

const Button_pot = () => (
  <div>
    <button className={styles["btn"]}>Hover</button>
  </div>
);

export default Button_pot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pot = () => (
         <div>
          <button className="btn">Hover</button>
        </div>
        );

        export default Button_pot;
        
        
         */
}
