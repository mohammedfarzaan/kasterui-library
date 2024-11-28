import React from "react";
import styles from "./Button_growth.module.css";

const Button_growth = () => (
  <div>
    <button className={styles["btn-1"]}>Hover me!</button>
  </div>
);

export default Button_growth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_growth = () => (
         <div>
          <button className="btn-1">Hover me!</button>
        </div>
        );

        export default Button_growth;
        
        
         */
}
