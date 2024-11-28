import React from "react";
import styles from "./Input_went.module.css";

const Input_went = () => (
  <div>
    <div className={styles["input-form"]}>
      <input className={styles["input"]} name="text" type="text" required="" />
      <label className={styles["textUser"]}>Click Here</label>
    </div>
  </div>
);

export default Input_went;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_went = () => (
         <div>
          <div className="input-form">
    <input className="input" name="text" type="text" required="" />
    <label className="textUser">Click Here</label>
  </div>
        </div>
        );

        export default Input_went;
        
        
         */
}
