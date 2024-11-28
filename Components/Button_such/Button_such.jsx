import React from "react";
import styles from "./Button_such.module.css";

const Button_such = () => (
  <div>
    <button className={styles["button"]}>3D Button</button>
  </div>
);

export default Button_such;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_such = () => (
         <div>
          <button className="button">3D Button</button>
        </div>
        );

        export default Button_such;
        
        
         */
}
