import React from "react";
import styles from "./Button_queen.module.css";

const Button_queen = () => (
  <div>
    <button className={styles["button"]}>Click me</button>
  </div>
);

export default Button_queen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_queen = () => (
         <div>
          <button className="button">
  Click me
</button>
        </div>
        );

        export default Button_queen;
        
        
         */
}
