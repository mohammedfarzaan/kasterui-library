import React from "react";
import styles from "./Button_must.module.css";

const Button_must = () => (
  <div>
    <button className={styles["btn-96"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_must;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_must = () => (
         <div>
          <button className="btn-96"><span>Button</span></button>
        </div>
        );

        export default Button_must;
        
        
         */
}
