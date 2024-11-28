import React from "react";
import styles from "./Button_degree.module.css";

const Button_degree = () => (
  <div>
    <button className={styles["btn"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_degree;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_degree = () => (
         <div>
          <button className="btn"><span>Button</span></button>
        </div>
        );

        export default Button_degree;
        
        
         */
}
