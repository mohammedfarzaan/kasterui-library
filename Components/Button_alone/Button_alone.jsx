import React from "react";
import styles from "./Button_alone.module.css";

const Button_alone = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button-text"]}>Button</span>
      <span className={styles["tooltip"]}>Tooltip</span>
    </button>
  </div>
);

export default Button_alone;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_alone = () => (
         <div>
          <button className="button">
  <span className="button-text">Button</span>
  <span className="tooltip">Tooltip</span>
</button>
        </div>
        );

        export default Button_alone;
        
        
         */
}
