import React from "react";
import styles from "./Button_metal.module.css";

const Button_metal = () => (
  <div>
    <a href="/" className={styles["brutalist-button"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["claude-logo"]}>
          <span className={styles["starburst"]}>✷</span>
        </div>
        <div className={styles["button-text"]}>
          <span>Powered By</span>
          <span>Claude 3.5</span>
        </div>
      </div>
    </a>
  </div>
);

export default Button_metal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_metal = () => (
         <div>
          <a href="/" className="brutalist-button">
  <div className="content-wrapper">
    <div className="claude-logo">
      <span className="starburst">✷</span>
    </div>
    <div className="button-text">
      <span>Powered By</span>
      <span>Claude 3.5</span>
    </div>
  </div>
</a>
        </div>
        );

        export default Button_metal;
        
        
         */
}
