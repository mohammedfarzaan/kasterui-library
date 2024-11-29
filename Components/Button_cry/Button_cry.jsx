import React from "react";
import styles from "./Button_cry.module.css";

const Button_cry = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>Button</span>
    </button>
  </div>
);

export default Button_cry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cry = () => (
         <div>
          <button className="button">
  <span className="span">Button</span>
</button>
        </div>
        );

        export default Button_cry;
        
        
         */
}
