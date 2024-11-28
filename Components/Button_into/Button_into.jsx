import React from "react";
import styles from "./Button_into.module.css";

const Button_into = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button__int"]}>
        <span className={styles["button__span"]}>Button</span>
      </div>
    </button>
  </div>
);

export default Button_into;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_into = () => (
         <div>
          <button className="button">
  <div className="button__int">
    <span className="button__span">Button</span>
  </div>
</button>
        </div>
        );

        export default Button_into;
        
        
         */
}
