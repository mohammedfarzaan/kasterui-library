import React from "react";
import styles from "./Button_keep.module.css";

const Button_keep = () => (
  <div>
    <button className={styles["button"]} style="vertical-align:middle">
      <span>Download</span>
    </button>
  </div>
);

export default Button_keep;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_keep = () => (
         <div>
          <button className="button" style="vertical-align:middle"><span>Download</span></button>
        </div>
        );

        export default Button_keep;
        
        
         */
}
