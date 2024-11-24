import React from "react";
import styles from "./Button_spin.module.css";

const Button_spin = () => (
  <div>
    <div className={styles["button"]}>
      <div className={styles["button__front"]}>rocket</div>
      <div className={styles["button__back"]}>roll</div>
    </div>
  </div>
);

export default Button_spin;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_spin = () => (
         <div>
          <div className="button">
    <div className="button__front">rocket</div>
    <div className="button__back">roll</div>
  </div>
        </div>
        );

        export default Button_spin;
        
        
         */
}