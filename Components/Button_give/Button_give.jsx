import React from "react";
import styles from "./Button_give.module.css";

const Button_give = () => (
  <div>
    <button className={styles["button"]}>I'm a Button</button>
  </div>
);

export default Button_give;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_give = () => (
         <div>
          <button className="button">
      I'm a Button
    </button>
        </div>
        );

        export default Button_give;
        
        
         */
}
