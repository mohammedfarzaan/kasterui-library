import React from "react";
import styles from "./Button_live.module.css";

const Button_live = () => (
  <div>
    <button className={styles["button"]}>NEON</button>
  </div>
);

export default Button_live;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_live = () => (
         <div>
          <button className="button">
  NEON
</button>
        </div>
        );

        export default Button_live;
        
        
         */
}
