import React from "react";
import styles from "./Input_near.module.css";

const Input_near = () => (
  <div>
    <div className={styles["input-container"]}>
      <input type="text" name="email" className={styles["text-input"]} />
      <label for="email">Email</label>
    </div>
  </div>
);

export default Input_near;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_near = () => (
         <div>
          <div className="input-container">
  <input type="text" name="email" className="text-input" />
  <label for="email">Email</label>
</div>
        </div>
        );

        export default Input_near;
        
        
         */
}
