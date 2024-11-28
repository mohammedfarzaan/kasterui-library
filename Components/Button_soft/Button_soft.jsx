import React from "react";
import styles from "./Button_soft.module.css";

const Button_soft = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["one"]}>Download 0%</span>
      <span className={styles["two"]}>100%</span>
    </button>
  </div>
);

export default Button_soft;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_soft = () => (
         <div>
          <button className="button">
  <span className="one">Download 0%</span>
  <span className="two">100%</span>
</button>
        </div>
        );

        export default Button_soft;
        
        
         */
}
