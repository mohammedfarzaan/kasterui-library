import React from "react";
import styles from "./Button_second.module.css";

const Button_second = () => (
  <div>
    <div className={styles["uiverse"]}>
      <span className={styles["tooltip"]}>uiverse.io</span>
      <span>Tooltip</span>
    </div>
  </div>
);

export default Button_second;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_second = () => (
         <div>
          <div className="uiverse">
    <span className="tooltip">uiverse.io</span>
    <span>
        Tooltip
    </span>
</div>
        </div>
        );

        export default Button_second;
        
        
         */
}
