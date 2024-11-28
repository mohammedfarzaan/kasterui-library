import React from "react";
import styles from "./Button_west.module.css";

const Button_west = () => (
  <div>
    <button className={styles["button"]}>ctrl</button>
  </div>
);

export default Button_west;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_west = () => (
         <div>
          <button className="button">
  ctrl
</button>
        </div>
        );

        export default Button_west;
        
        
         */
}
