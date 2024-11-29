import React from "react";
import styles from "./Button_noted.module.css";

const Button_noted = () => (
  <div>
    <div className={styles["btn-container"]}>
      <button className={styles["glowing-button"]}>
        click me
        <span className={styles["arrow"]}>➔</span>
      </button>
    </div>
  </div>
);

export default Button_noted;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_noted = () => (
         <div>
          <div className="btn-container">
  <button className="glowing-button">
    click me
    <span className="arrow">➔</span>
  </button>
</div>
        </div>
        );

        export default Button_noted;
        
        
         */
}
