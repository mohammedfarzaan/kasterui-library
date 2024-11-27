import React from "react";
import styles from "./Button_away.module.css";

const Button_away = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["icon_cont"]}>
        <span className={styles["icon"]}>🡪</span>
      </div>
      <span className={styles["text_button"]}>Hover this button</span>
    </button>
  </div>
);

export default Button_away;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_away = () => (
         <div>
          <button className="button">
  <div className="icon_cont">
    <span className="icon">🡪</span>
  </div>
  <span className="text_button">Hover this button</span>
</button>
        </div>
        );

        export default Button_away;
        
        
         */
}
