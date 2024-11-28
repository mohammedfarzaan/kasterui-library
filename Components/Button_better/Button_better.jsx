import React from "react";
import styles from "./Button_better.module.css";

const Button_better = () => (
  <div>
    <button className={styles["button"] + styles["type1"]}>
      <span className={styles["btn-txt"]}>Hello</span>
    </button>
  </div>
);

export default Button_better;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_better = () => (
         <div>
          <button className="button type1">
  <span className="btn-txt">Hello</span>
</button>
        </div>
        );

        export default Button_better;
        
        
         */
}
