import React from "react";
import styles from "./Button_upper.module.css";

const Button_upper = () => (
  <div>
    <button className={styles["btn"]}>submit</button>
  </div>
);

export default Button_upper;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_upper = () => (
         <div>
          <button className="btn">
  submit
</button>
        </div>
        );

        export default Button_upper;
        
        
         */
}