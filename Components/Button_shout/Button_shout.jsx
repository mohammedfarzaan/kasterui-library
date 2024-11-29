import React from "react";
import styles from "./Button_shout.module.css";

const Button_shout = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["similar-line"] + styles["line-1"]}></div>
      <div className={styles["similar-line"] + styles["line-2"]}></div>
      <div className={styles["similar-line"] + styles["line-3"]}></div>
    </button>
  </div>
);

export default Button_shout;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_shout = () => (
         <div>
          <button className="button">
  <div className="similar-line line-1"></div>
  <div className="similar-line line-2"></div>
  <div className="similar-line line-3"></div>
</button>
        </div>
        );

        export default Button_shout;
        
        
         */
}
