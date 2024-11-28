import React from "react";
import styles from "./Button_almost.module.css";

const Button_almost = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>Button</span>
    </button>
  </div>
);

export default Button_almost;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_almost = () => (
         <div>
          <button className="button">
  <span className="span">Button</span>
</button>
        </div>
        );

        export default Button_almost;
        
        
         */
}
