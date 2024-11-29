import React from "react";
import styles from "./Button_atom.module.css";

const Button_atom = () => (
  <div>
    <button className={styles["button"] + styles["type1"]}>
      <span className={styles["btn-txt"]}>Hello</span>
    </button>
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
          <button className="button type1">
  <span className="btn-txt">Hello</span>
</button>
        </div>
        );

        export default Button_atom;
        
        
         */
}
