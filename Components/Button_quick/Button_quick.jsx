import React from "react";
import styles from "./Button_quick.module.css";

const Button_quick = () => (
  <div>
    <span
      data-active-content="🤨"
      data-hover-content="😑"
      data-content="😐"
      className={styles["💀"]}
    ></span>
  </div>
);

export default Button_quick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_quick = () => (
         <div>
          <span
  data-active-content="🤨"
  data-hover-content="😑"
  data-content="😐"
  className="💀"
></span>
        </div>
        );

        export default Button_quick;
        
        
         */
}
