import React from "react";
import styles from "./Button_cake.module.css";

const Button_cake = () => (
  <div>
    <button className={styles["button"]}>
      Button
      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_cake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cake = () => (
         <div>
          <button className="button">
  Button
  <span></span>
  <span></span>
</button>
        </div>
        );

        export default Button_cake;
        
        
         */
}
