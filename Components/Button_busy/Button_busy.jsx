import React from "react";
import styles from "./Button_busy.module.css";

const Button_busy = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-4"]}>
      <span>Read More</span>
    </button>
  </div>
);

export default Button_busy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_busy = () => (
         <div>
          <button className="custom-btn btn-4"><span>Read More</span></button>
        </div>
        );

        export default Button_busy;
        
        
         */
}
