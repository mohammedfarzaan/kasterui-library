import React from "react";
import styles from "./Button_every.module.css";

const Button_every = () => (
  <div>
    <div className={styles["btn-container"]}>
      <button className={styles["glowing-button"]}>
        click me
        <span className={styles["arrow"]}>➔</span>
      </button>
    </div>
  </div>
);

export default Button_every;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_every = () => (
         <div>
          <div className="btn-container">
  <button className="glowing-button">
    click me
    <span className="arrow">➔</span>
  </button>
</div>
        </div>
        );

        export default Button_every;
        
        
         */
}