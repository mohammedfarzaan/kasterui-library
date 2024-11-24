import React from "react";
import styles from "./Button_after.module.css";

const Button_after = () => (
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

export default Button_after;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_after = () => (
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

        export default Button_after;
        
        
         */
}
