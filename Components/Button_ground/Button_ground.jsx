import React from "react";
import styles from "./Button_ground.module.css";

const Button_ground = () => (
  <div>
    <button className={styles["button1"]}>Click me!</button>
  </div>
);

export default Button_ground;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_ground = () => (
         <div>
          <button className="button1">
 Click me!
</button>
        </div>
        );

        export default Button_ground;
        
        
         */
}
