import React from "react";
import styles from "./Button_maybe.module.css";

const Button_maybe = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["button-inner"]}>Button</div>
    </button>
  </div>
);

export default Button_maybe;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_maybe = () => (
         <div>
          <button className="button">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="button-inner">Button</div>
</button>
        </div>
        );

        export default Button_maybe;
        
        
         */
}
