import React from "react";
import styles from "./Button_toward.module.css";

const Button_toward = () => (
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

export default Button_toward;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_toward = () => (
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

        export default Button_toward;
        
        
         */
}
