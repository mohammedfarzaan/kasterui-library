import React from "react";
import styles from "./Button_enemy.module.css";

const Button_enemy = () => (
  <div>
    <div className={styles["button-container"]}>
      <span className={styles["text"]}>
        <span className={styles["button-lines"]}>
          <span className={styles["button-line-1"]}></span>
          <span className={styles["button-line-2"]}></span>
        </span>
      </span>
    </div>
  </div>
);

export default Button_enemy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_enemy = () => (
         <div>
          <div className="button-container">
  <span className="text">
    <span className="button-lines">
      <span className="button-line-1"></span>
      <span className="button-line-2"></span>
    </span>
  </span>
</div>
        </div>
        );

        export default Button_enemy;
        
        
         */
}
