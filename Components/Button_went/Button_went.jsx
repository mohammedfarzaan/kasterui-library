import React from "react";
import styles from "./Button_went.module.css";

const Button_went = () => (
  <div>
    <button className={styles["beautiful-button"]}>Click me!</button>
  </div>
);

export default Button_went;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_went = () => (
         <div>
          <button className="beautiful-button">
  Click me!
</button>
        </div>
        );

        export default Button_went;
        
        
         */
}
