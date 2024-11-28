import React from "react";
import styles from "./Button_atom.module.css";

const Button_atom = () => (
  <div>
    <button className={styles["button"]}>Click here ..</button>
  </div>
);

export default Button_atom;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_atom = () => (
         <div>
          <button className="button">
  Click here ..
</button>
        </div>
        );

        export default Button_atom;
        
        
         */
}
