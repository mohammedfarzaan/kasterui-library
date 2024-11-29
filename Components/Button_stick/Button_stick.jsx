import React from "react";
import styles from "./Button_stick.module.css";

const Button_stick = () => (
  <div>
    <a href="#" className={styles["button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </a>
  </div>
);

export default Button_stick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_stick = () => (
         <div>
          <a href="#" className="button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Button
</a>
        </div>
        );

        export default Button_stick;
        
        
         */
}
