import React from "react";
import styles from "./Button_single.module.css";

const Button_single = () => (
  <div>
    <button className={styles["btn"]}>
      Button
      <span className={styles["icon-right"]}></span>
      <span className={styles["icon-right"] + styles["after"]}></span>
    </button>
  </div>
);

export default Button_single;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_single = () => (
         <div>
          <button className="btn">Button 
  <span className="icon-right"></span>
  <span className="icon-right after"></span>
</button>
        </div>
        );

        export default Button_single;
        
        
         */
}
