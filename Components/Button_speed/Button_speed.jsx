import React from "react";
import styles from "./Button_speed.module.css";

const Button_speed = () => (
  <div>
    <button className={styles["button"]}>Click Me</button>
  </div>
);

export default Button_speed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_speed = () => (
         <div>
          <button className="button">
  Click Me
</button>
        </div>
        );

        export default Button_speed;
        
        
         */
}
