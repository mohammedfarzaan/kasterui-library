import React from "react";
import styles from "./Button_trap.module.css";

const Button_trap = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["toggle"]}>
        <input type="checkbox" />
        <span className={styles["button"]}></span>
        <span className={styles["label"]}>☼</span>
      </div>
    </div>
  </div>
);

export default Button_trap;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_trap = () => (
         <div>
          <div className="container">
  <div className="toggle">
    <input type="checkbox" />
    <span className="button"></span>
    <span className="label">☼</span>
  </div>
</div>
        </div>
        );

        export default Button_trap;
        
        
         */
}
