import React from "react";
import styles from "./Button_longer.module.css";

const Button_longer = () => (
  <div>
    <button className={styles["btn"] + styles["btn--primary"]}>
      <span className={styles["btn-inner"]}>
        <span className={styles["btn-label"]}>to the galaxy</span>
        <span className={styles["btn-blur"]} aria-hidden=""></span>
      </span>
    </button>
  </div>
);

export default Button_longer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_longer = () => (
         <div>
          <button className="btn btn--primary">

  <span className="btn-inner">
    <span className="btn-label">
      to the galaxy
    </span>
    <span className="btn-blur" aria-hidden=""></span>
  </span>
  
</button>
        </div>
        );

        export default Button_longer;
        
        
         */
}
