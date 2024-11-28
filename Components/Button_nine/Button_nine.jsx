import React from "react";
import styles from "./Button_nine.module.css";

const Button_nine = () => (
  <div>
    <button className={styles["button"]}>Click Here</button>
  </div>
);

export default Button_nine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_nine = () => (
         <div>
          <button className="button">Click Here</button>
        </div>
        );

        export default Button_nine;
        
        
         */
}
