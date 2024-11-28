import React from "react";
import styles from "./Button_wore.module.css";

const Button_wore = () => (
  <div>
    <button className={styles["button"]}>
      <span>➢</span> Button
    </button>
  </div>
);

export default Button_wore;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wore = () => (
         <div>
          <button className="button"><span>➢</span> Button</button>
        </div>
        );

        export default Button_wore;
        
        
         */
}
