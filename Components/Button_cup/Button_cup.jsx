import React from "react";
import styles from "./Button_cup.module.css";

const Button_cup = () => (
  <div>
    <div className={styles["button-container"]}>
      <button className={styles["button-3d"]}>
        <div className={styles["button-top"]}>
          <span className={styles["material-icons"]}>❮</span>
        </div>
        <div className={styles["button-bottom"]}></div>
        <div className={styles["button-base"]}></div>
      </button>
      <button className={styles["button-3d"]}>
        <div className={styles["button-top"]}>
          <span className={styles["material-icons"]}>❯</span>
        </div>
        <div className={styles["button-bottom"]}></div>
        <div className={styles["button-base"]}></div>
      </button>
    </div>
  </div>
);

export default Button_cup;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cup = () => (
         <div>
          <div className="button-container">
  <button className="button-3d">
    <div className="button-top">
      <span className="material-icons">❮</span>
    </div>
    <div className="button-bottom"></div>
    <div className="button-base"></div>
  </button>
  <button className="button-3d">
    <div className="button-top">
      <span className="material-icons">❯</span>
    </div>
    <div className="button-bottom"></div>
    <div className="button-base"></div>
  </button>
</div>
        </div>
        );

        export default Button_cup;
        
        
         */
}
