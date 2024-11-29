import React from "react";
import styles from "./Button_advice.module.css";

const Button_advice = () => (
  <div>
    <button className={styles["button"]}>Awesome Button</button>
  </div>
);

export default Button_advice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_advice = () => (
         <div>
          <button className="button">Awesome Button</button>
        </div>
        );

        export default Button_advice;
        
        
         */
}
