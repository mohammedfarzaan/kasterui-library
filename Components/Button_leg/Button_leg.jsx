import React from "react";
import styles from "./Button_leg.module.css";

const Button_leg = () => (
  <div>
    <button className={styles["btn"]}> Button</button>
  </div>
);

export default Button_leg;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_leg = () => (
         <div>
          <button className="btn"> Button
</button>
        </div>
        );

        export default Button_leg;
        
        
         */
}
