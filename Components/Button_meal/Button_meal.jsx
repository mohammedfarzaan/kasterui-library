import React from "react";
import styles from "./Button_meal.module.css";

const Button_meal = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_meal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_meal = () => (
         <div>
          <button className="custom-btn btn"><span>Button</span></button>
        </div>
        );

        export default Button_meal;
        
        
         */
}
