import React from "react";
import styles from "./Button_kids.module.css";

const Button_kids = () => (
  <div>
    <div className={styles["button"]}>
      <div className={styles["button__front"]}>rocket</div>
      <div className={styles["button__back"]}>roll</div>
    </div>
  </div>
);

export default Button_kids;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_kids = () => (
         <div>
          <div className="button">
    <div className="button__front">rocket</div>
    <div className="button__back">roll</div>
  </div>
        </div>
        );

        export default Button_kids;
        
        
         */
}
