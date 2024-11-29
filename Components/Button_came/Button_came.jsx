import React from "react";
import styles from "./Button_came.module.css";

const Button_came = () => (
  <div>
    <button className={styles["btn"] + styles["spacex-btn"]}>
      <span>Launch Rocket</span>
      <div className={styles["btn-bg"]}></div>
    </button>
  </div>
);

export default Button_came;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_came = () => (
         <div>
          <button className="btn spacex-btn">
  <span>Launch Rocket</span>
  <div className="btn-bg"></div>
</button>
        </div>
        );

        export default Button_came;
        
        
         */
}
