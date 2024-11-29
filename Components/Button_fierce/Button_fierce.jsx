import React from "react";
import styles from "./Button_fierce.module.css";

const Button_fierce = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["liquid"]}></span>
      <span className={styles["btn-txt"]}>Click Me</span>
    </button>
  </div>
);

export default Button_fierce;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fierce = () => (
         <div>
          <button className="button">
  <span className="liquid"></span>  
  <span className="btn-txt">Click Me</span>
</button>
        </div>
        );

        export default Button_fierce;
        
        
         */
}
