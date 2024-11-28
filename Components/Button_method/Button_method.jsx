import React from "react";
import styles from "./Button_method.module.css";

const Button_method = () => (
  <div>
    <button className={styles["btn"]}>Watch</button>
  </div>
);

export default Button_method;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_method = () => (
         <div>
          <button className="btn">
  Watch
</button>
        </div>
        );

        export default Button_method;
        
        
         */
}
