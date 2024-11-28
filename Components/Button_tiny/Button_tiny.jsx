import React from "react";
import styles from "./Button_tiny.module.css";

const Button_tiny = () => (
  <div>
    <button type="button" className={styles["glow-on-hover"]}>
      HOVER AND CLICK ME!
    </button>
  </div>
);

export default Button_tiny;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tiny = () => (
         <div>
          <button type="button" className="glow-on-hover">
  HOVER AND CLICK ME!
</button>
        </div>
        );

        export default Button_tiny;
        
        
         */
}
