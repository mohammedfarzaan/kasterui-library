import React from "react";
import styles from "./Button_aloud.module.css";

const Button_aloud = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button__span"]}>Button</span>
    </button>
  </div>
);

export default Button_aloud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_aloud = () => (
         <div>
          <button className="button">
  <span className="button__span">Button</span>
  
</button>
        </div>
        );

        export default Button_aloud;
        
        
         */
}
