import React from "react";
import styles from "./Button_line.module.css";

const Button_line = () => (
  <div>
    <button className={styles["btn-donate"]}>Donate now</button>
  </div>
);

export default Button_line;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_line = () => (
         <div>
          <button className="btn-donate">
    Donate now
</button>
        </div>
        );

        export default Button_line;
        
        
         */
}
