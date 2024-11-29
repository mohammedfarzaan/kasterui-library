import React from "react";
import styles from "./Input_work.module.css";

const Input_work = () => (
  <div>
    <input className={styles["input"]} placeholder="text" />
  </div>
);

export default Input_work;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_work = () => (
         <div>
          <input className="input" placeholder="text" />
        </div>
        );

        export default Input_work;
        
        
         */
}
