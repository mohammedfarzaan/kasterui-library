import React from "react";
import styles from "./Button_pie.module.css";

const Button_pie = () => (
  <div>
    <button className={styles["animated-button"]}>hover me</button>
  </div>
);

export default Button_pie;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pie = () => (
         <div>
          <button className="animated-button">hover me</button>
        </div>
        );

        export default Button_pie;
        
        
         */
}
