import React from "react";
import styles from "./Button_simple.module.css";

const Button_simple = () => (
  <div>
    <button className={styles["morph-button"]}></button>
  </div>
);

export default Button_simple;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_simple = () => (
         <div>
          <button className="morph-button"></button>
        </div>
        );

        export default Button_simple;
        
        
         */
}
