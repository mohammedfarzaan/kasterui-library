import React from "react";
import styles from "./Button_burn.module.css";

const Button_burn = () => (
  <div>
    <button className={styles["btn-27"]}>
      <span className={styles["text-container"]}>
        <span className={styles["text"]}>Button</span>
      </span>
      <span className={styles["text-container"]}>
        <span aria-hidden="" className={styles["text"]}>
          Button
        </span>
      </span>
    </button>
  </div>
);

export default Button_burn;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_burn = () => (
         <div>
          <button className="btn-27">
  <span className="text-container">
    <span className="text">Button</span>
  </span>
  <span className="text-container">
    <span aria-hidden="" className="text">Button</span>
  </span>
</button>
        </div>
        );

        export default Button_burn;
        
        
         */
}
