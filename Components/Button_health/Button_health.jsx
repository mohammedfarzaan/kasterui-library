import React from "react";
import styles from "./Button_health.module.css";

const Button_health = () => (
  <div>
    <button className={styles["swallow__icon"]}>
      <span></span>
    </button>
  </div>
);

export default Button_health;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_health = () => (
         <div>
          <button className="swallow__icon">
  <span></span>
</button>
        </div>
        );

        export default Button_health;
        
        
         */
}
