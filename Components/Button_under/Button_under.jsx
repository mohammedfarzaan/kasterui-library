import React from "react";
import styles from "./Button_under.module.css";

const Button_under = () => (
  <div>
    <div className={styles["emoji-button-container"]}>
      <button className={styles["emoji-button"]}>Hover Me</button>
      <div className={styles["emoji-animations"]}>
        <span className={styles["emoji"]}>😊</span>
        <span className={styles["emoji"]}>🎸</span>
        <span className={styles["emoji"]}>🚀</span>
        <span className={styles["emoji"]}>❤️</span>
      </div>
    </div>
  </div>
);

export default Button_under;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_under = () => (
         <div>
          <div className="emoji-button-container">
  <button className="emoji-button">Hover Me</button>
  <div className="emoji-animations">
    <span className="emoji">😊</span>
    <span className="emoji">🎸</span>
    <span className="emoji">🚀</span>
    <span className="emoji">❤️</span>
  </div>
</div>
        </div>
        );

        export default Button_under;
        
        
         */
}
