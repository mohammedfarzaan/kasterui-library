import React from "react";
import styles from "./Button_let.module.css";

const Button_let = () => (
  <div>
    <button className={styles["button"]}>Join now</button>
  </div>
);

export default Button_let;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_let = () => (
         <div>
          <button className="button">Join now</button>
        </div>
        );

        export default Button_let;
        
        
         */
}
