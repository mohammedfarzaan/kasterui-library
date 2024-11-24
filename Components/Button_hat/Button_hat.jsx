import React from "react";
import styles from "./Button_hat.module.css";

const Button_hat = () => (
  <div>
    <button className={styles["button"]}>
      <span>Bubble Button</span>
      <svg
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="-5 -5 110 110"
      >
        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"></path>
      </svg>
    </button>
  </div>
);

export default Button_hat;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_hat = () => (
         <div>
          <button className="button">
  <span>Bubble Button</span>
  <svg aria-hidden="true" preserveAspectRatio="none" viewBox="-5 -5 110 110">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"></path>
  </svg>
</button>
        </div>
        );

        export default Button_hat;
        
        
         */
}
