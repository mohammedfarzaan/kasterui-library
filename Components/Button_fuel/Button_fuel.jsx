import React from "react";
import styles from "./Button_fuel.module.css";

const Button_fuel = () => (
  <div>
    <div className={styles["button"]}>
      Button<span className={styles["button-border"]}></span>
    </div>
  </div>
);

export default Button_fuel;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fuel = () => (
         <div>
          <div className="button">
  Button<span className="button-border"></span>
</div>
        </div>
        );

        export default Button_fuel;
        
        
         */
}
