import React from "react";
import styles from "./Button_lunch.module.css";

const Button_lunch = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["X"]}></span>
      <span className={styles["Y"]}></span>
      <div className={styles["close"]}>Close</div>
    </button>
  </div>
);

export default Button_lunch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lunch = () => (
         <div>
          <button className="button">
  <span className="X"></span>
  <span className="Y"></span>
  <div className="close">Close</div>
</button>
        </div>
        );

        export default Button_lunch;
        
        
         */
}
