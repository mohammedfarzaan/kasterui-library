import React from "react";
import styles from "./Button_rough.module.css";

const Button_rough = () => (
  <div>
    <button className={styles["btn"]}>
      <span>Hover Me</span>
    </button>
  </div>
);

export default Button_rough;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_rough = () => (
         <div>
          <button className="btn"><span>Hover Me</span></button>
        </div>
        );

        export default Button_rough;
        
        
         */
}
