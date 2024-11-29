import React from "react";
import styles from "./Button_think.module.css";

const Button_think = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["btn-txt"]}>Hello !</p>
    </button>
  </div>
);

export default Button_think;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_think = () => (
         <div>
          <button className="button">
  <p className="btn-txt">Hello !</p>
</button>
        </div>
        );

        export default Button_think;
        
        
         */
}
