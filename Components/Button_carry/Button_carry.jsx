import React from "react";
import styles from "./Button_carry.module.css";

const Button_carry = () => (
  <div>
    <button className={styles["btn"] + styles["btn--primary"]}>
      <span className={styles["btn-inner"]}>
        <span className={styles["btn-label"]}>to the galaxy</span>
        <span className={styles["btn-blur"]} aria-hidden=""></span>
      </span>
    </button>
  </div>
);

export default Button_carry;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_carry = () => (
         <div>
          <button className="btn btn--primary">

  <span className="btn-inner">
    <span className="btn-label">
      to the galaxy
    </span>
    <span className="btn-blur" aria-hidden=""></span>
  </span>
  
</button>
        </div>
        );

        export default Button_carry;
        
        
         */
}
