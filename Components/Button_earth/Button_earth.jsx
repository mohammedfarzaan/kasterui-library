import React from "react";
import styles from "./Button_earth.module.css";

const Button_earth = () => (
  <div>
    <button className={styles["button"]}>
      <span>Hover!</span>
    </button>
  </div>
);

export default Button_earth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_earth = () => (
         <div>
          <button className="button">
  <span>Hover!</span>
</button>
        </div>
        );

        export default Button_earth;
        
        
         */
}
