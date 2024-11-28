import React from "react";
import styles from "./Input_fully.module.css";

const Input_fully = () => (
  <div>
    <div className={styles["input-container"]}>
      <input placeholder="email" type="text" className={styles["input"]} />
      <span>@gmail.com</span>
    </div>
  </div>
);

export default Input_fully;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_fully = () => (
         <div>
          <div className="input-container">
    <input placeholder="email" type="text" className="input" />
    <span>@gmail.com</span>
</div>
        </div>
        );

        export default Input_fully;
        
        
         */
}
