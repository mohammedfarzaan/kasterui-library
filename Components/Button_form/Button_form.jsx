import React from "react";
import styles from "./Button_form.module.css";

const Button_form = () => (
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

export default Button_form;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_form = () => (
         <div>
          <button className="button">
  <span>Bubble Button</span>
  <svg aria-hidden="true" preserveAspectRatio="none" viewBox="-5 -5 110 110">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"></path>
  </svg>
</button>
        </div>
        );

        export default Button_form;
        
        
         */
}
