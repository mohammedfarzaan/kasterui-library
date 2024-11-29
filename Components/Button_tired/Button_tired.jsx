import React from "react";
import styles from "./Button_tired.module.css";

const Button_tired = () => (
  <div>
    <div className={styles["button-container"]}>
      <button className={styles["styled-button"]}>
        Join Today <span className={styles["arrow"]}>→</span>
      </button>
    </div>
  </div>
);

export default Button_tired;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tired = () => (
         <div>
          <div className="button-container">
  <button className="styled-button">Join Today <span className="arrow">→</span></button>
</div>
        </div>
        );

        export default Button_tired;
        
        
         */
}
