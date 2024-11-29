import React from "react";
import styles from "./Input_neck.module.css";

const Input_neck = () => (
  <div>
    <div className={styles["input-container"]}>
      <input placeholder="email" type="text" className={styles["input"]} />
      <span>@gmail.com</span>
    </div>
  </div>
);

export default Input_neck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_neck = () => (
         <div>
          <div className="input-container">
    <input placeholder="email" type="text" className="input" />
    <span>@gmail.com</span>
</div>
        </div>
        );

        export default Input_neck;
        
        
         */
}
