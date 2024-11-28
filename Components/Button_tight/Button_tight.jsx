import React from "react";
import styles from "./Button_tight.module.css";

const Button_tight = () => (
  <div>
    <div className={styles["button-cont"]}>
      <button className={styles["button"]}>Light Button</button>
    </div>
  </div>
);

export default Button_tight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tight = () => (
         <div>
          <div className="button-cont">
  <button className="button">Light Button</button>
</div>
        </div>
        );

        export default Button_tight;
        
        
         */
}
