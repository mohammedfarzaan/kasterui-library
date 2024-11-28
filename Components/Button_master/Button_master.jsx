import React from "react";
import styles from "./Button_master.module.css";

const Button_master = () => (
  <div>
    <button className={styles["learn-more"]}>
      <span className={styles["circle"]} aria-hidden="true">
        <span className={styles["icon"] + styles["arrow"]}></span>
      </span>
      <span className={styles["button-text"]}>Learn More</span>
    </button>
  </div>
);

export default Button_master;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_master = () => (
         <div>
          <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Learn More</span>
</button>
        </div>
        );

        export default Button_master;
        
        
         */
}
