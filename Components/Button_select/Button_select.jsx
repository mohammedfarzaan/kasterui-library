import React from "react";
import styles from "./Button_select.module.css";

const Button_select = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>🔎</span>
    </button>
  </div>
);

export default Button_select;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_select = () => (
         <div>
          <button className="button">
  <span className="span">🔎</span>
</button>
        </div>
        );

        export default Button_select;
        
        
         */
}
