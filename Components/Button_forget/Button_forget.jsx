import React from "react";
import styles from "./Button_forget.module.css";

const Button_forget = () => (
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

export default Button_forget;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_forget = () => (
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

        export default Button_forget;
        
        
         */
}
