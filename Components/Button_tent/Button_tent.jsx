import React from "react";
import styles from "./Button_tent.module.css";

const Button_tent = () => (
  <div>
    <button className={styles["btn"]}>Watch</button>
  </div>
);

export default Button_tent;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tent = () => (
         <div>
          <button className="btn">
  Watch
</button>
        </div>
        );

        export default Button_tent;
        
        
         */
}
