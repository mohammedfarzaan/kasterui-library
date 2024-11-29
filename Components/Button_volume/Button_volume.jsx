import React from "react";
import styles from "./Button_volume.module.css";

const Button_volume = () => (
  <div>
    <div className={styles["background"]}>
      <button className={styles["change-theme__icon"]}>
        <span className={styles["icon-sun-moon"]}></span>
        <span className={styles["sun-rays"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  </div>
);

export default Button_volume;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_volume = () => (
         <div>
          <div className="background">
  <button className="change-theme__icon">
    <span className="icon-sun-moon"></span>
    <span className="sun-rays">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</div>
        </div>
        );

        export default Button_volume;
        
        
         */
}
