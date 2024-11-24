import React from "react";
import styles from "./Button_feet.module.css";

const Button_feet = () => (
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

export default Button_feet;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_feet = () => (
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

        export default Button_feet;
        
        
         */
}
