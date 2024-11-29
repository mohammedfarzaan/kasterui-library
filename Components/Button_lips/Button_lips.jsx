import React from "react";
import styles from "./Button_lips.module.css";

const Button_lips = () => (
  <div>
    <button className={styles["button"]}>
      hover me
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_lips;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lips = () => (
         <div>
          <button className="button">
  hover me
  <span></span><span></span><span></span><span></span>
</button>
        </div>
        );

        export default Button_lips;
        
        
         */
}
