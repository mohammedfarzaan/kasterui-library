import React from "react";
import styles from "./Button_direct.module.css";

const Button_direct = () => (
  <div>
    <button className={styles["button"]}>Submit</button>
  </div>
);

export default Button_direct;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_direct = () => (
         <div>
          <button className="button">Submit</button>
        </div>
        );

        export default Button_direct;
        
        
         */
}
