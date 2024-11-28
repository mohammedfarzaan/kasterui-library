import React from "react";
import styles from "./Button_box.module.css";

const Button_box = () => (
  <div>
    <button className={styles["setting-btn"]}>
      <span className={styles["bar"] + styles["bar1"]}></span>
      <span className={styles["bar"] + styles["bar2"]}></span>
      <span className={styles["bar"] + styles["bar1"]}></span>
    </button>
  </div>
);

export default Button_box;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_box = () => (
         <div>
          <button className="setting-btn">
  <span className="bar bar1"></span>
  <span className="bar bar2"></span>
  <span className="bar bar1"></span>
</button>
        </div>
        );

        export default Button_box;
        
        
         */
}
