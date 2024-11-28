import React from "react";
import styles from "./Button_proud.module.css";

const Button_proud = () => (
  <div>
    <button className={styles["glow-on-hover"]} type="button">
      HOVER ME, THEN CLICK ME!
    </button>
  </div>
);

export default Button_proud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_proud = () => (
         <div>
          <button className="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button>
        </div>
        );

        export default Button_proud;
        
        
         */
}
