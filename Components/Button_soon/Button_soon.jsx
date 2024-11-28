import React from "react";
import styles from "./Button_soon.module.css";

const Button_soon = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["display"]}>
        <div id="msg">Click Me</div>
      </div>

      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_soon;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_soon = () => (
         <div>
          <button className="button">
  <div className="display">
    <div id="msg">Click Me</div>
  </div>
  
  <span></span>
  <span></span>
</button>
        </div>
        );

        export default Button_soon;
        
        
         */
}
