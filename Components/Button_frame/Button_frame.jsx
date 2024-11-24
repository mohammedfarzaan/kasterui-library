import React from "react";
import styles from "./Button_frame.module.css";

const Button_frame = () => (
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

export default Button_frame;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_frame = () => (
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

        export default Button_frame;
        
        
         */
}
