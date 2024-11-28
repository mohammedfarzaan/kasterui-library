import React from "react";
import styles from "./Button_many.module.css";

const Button_many = () => (
  <div>
    <button className={styles["button"]}>Hover</button>
  </div>
);

export default Button_many;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_many = () => (
         <div>
          <button className="button">Hover</button>
        </div>
        );

        export default Button_many;
        
        
         */
}
