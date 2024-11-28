import React from "react";
import styles from "./Button_steel.module.css";

const Button_steel = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["container"]}>
        <button className={styles["button"]}>
          <span>A</span>
        </button>
        <button className={styles["button"]}>
          <span>B</span>
        </button>
        <button className={styles["button"]}>
          <span>C</span>
        </button>
        <button className={styles["button"]}>
          <span>D</span>
        </button>
      </div>
    </div>
  </div>
);

export default Button_steel;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_steel = () => (
         <div>
          <div className="box">
  <div className="container">
    <button className="button"><span>A</span></button>
    <button className="button"><span>B</span></button>
    <button className="button"><span>C</span></button>
    <button className="button"><span>D</span></button>
  </div>
</div>
        </div>
        );

        export default Button_steel;
        
        
         */
}
