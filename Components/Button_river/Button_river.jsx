import React from "react";
import styles from "./Button_river.module.css";

const Button_river = () => (
  <div>
    <button className={styles["full-rounded"]}>
      <span>Hover me</span>
      <div className={styles["border"] + styles["full-rounded"]}></div>
    </button>
  </div>
);

export default Button_river;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_river = () => (
         <div>
          <button className="full-rounded">
<span>Hover me</span>
<div className="border full-rounded"></div></button>
        </div>
        );

        export default Button_river;
        
        
         */
}
