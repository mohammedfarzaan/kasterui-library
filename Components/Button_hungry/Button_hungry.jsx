import React from "react";
import styles from "./Button_hungry.module.css";

const Button_hungry = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-overlay"]}></div>
      <span>Gradient Button</span>
    </button>
  </div>
);

export default Button_hungry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hungry = () => (
         <div>
          <button className="button">
  <div className="button-overlay"></div>
  <span>Gradient Button</span>  
</button>
        </div>
        );

        export default Button_hungry;
        
        
         */
}
