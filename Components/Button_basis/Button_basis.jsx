import React from "react";
import styles from "./Button_basis.module.css";

const Button_basis = () => (
  <div>
    <button className={styles["bt"]}>Button</button>
  </div>
);

export default Button_basis;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_basis = () => (
         <div>
          <button className="bt">
  Button

</button>
        </div>
        );

        export default Button_basis;
        
        
         */
}
