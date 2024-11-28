import React from "react";
import styles from "./Button_die.module.css";

const Button_die = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["span"]}>About us</span>
      <span className={styles["span"]}>Hello!</span>
    </button>
  </div>
);

export default Button_die;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_die = () => (
         <div>
          <button className="button">
  <span className="span">About us</span>
  <span className="span">Hello!</span>
</button>
        </div>
        );

        export default Button_die;
        
        
         */
}
