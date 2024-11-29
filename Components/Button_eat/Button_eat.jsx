import React from "react";
import styles from "./Button_eat.module.css";

const Button_eat = () => (
  <div>
    <div className={styles["background-button"]}>
      <button className={styles["button"]}>EMERGENCY</button>
    </div>
  </div>
);

export default Button_eat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_eat = () => (
         <div>
          <div className="background-button">
  <button className="button">
    EMERGENCY
  </button>
</div>
        </div>
        );

        export default Button_eat;
        
        
         */
}
