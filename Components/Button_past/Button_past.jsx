import React from "react";
import styles from "./Button_past.module.css";

const Button_past = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["icon_cont"]}>
        <span className={styles["icon"]}>🡪</span>
      </div>
      <span className={styles["text_button"]}>Hover this button</span>
    </button>
  </div>
);

export default Button_past;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_past = () => (
         <div>
          <button className="button">
  <div className="icon_cont">
    <span className="icon">🡪</span>
  </div>
  <span className="text_button">Hover this button</span>
</button>
        </div>
        );

        export default Button_past;
        
        
         */
}
