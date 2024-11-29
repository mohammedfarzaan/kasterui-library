import React from "react";
import styles from "./Button_hurt.module.css";

const Button_hurt = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["circle"]}></div>
      <span>Button</span>
    </button>
  </div>
);

export default Button_hurt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_hurt = () => (
         <div>
          <button className="button">
  <div className="circle"></div>
  <span>Button</span>
</button>
        </div>
        );

        export default Button_hurt;
        
        
         */
}
