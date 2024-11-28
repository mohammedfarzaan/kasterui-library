import React from "react";
import styles from "./Button_column.module.css";

const Button_column = () => (
  <div>
    <button className={styles["button"]}>join now</button>
  </div>
);

export default Button_column;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_column = () => (
         <div>
          <button className="button">join now</button>
        </div>
        );

        export default Button_column;
        
        
         */
}
