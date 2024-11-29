import React from "react";
import styles from "./Button_driven.module.css";

const Button_driven = () => (
  <div>
    <button className={styles["btn"]}> Button</button>
  </div>
);

export default Button_driven;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_driven = () => (
         <div>
          <button className="btn"> Button
</button>
        </div>
        );

        export default Button_driven;
        
        
         */
}
