import React from "react";
import styles from "./Button_five.module.css";

const Button_five = () => (
  <div>
    <button className={styles["button"]}>join now</button>
  </div>
);

export default Button_five;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_five = () => (
         <div>
          <button className="button">join now</button>
        </div>
        );

        export default Button_five;
        
        
         */
}
