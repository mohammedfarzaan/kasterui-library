import React from "react";
import styles from "./Input_court.module.css";

const Input_court = () => (
  <div>
    <div className={styles["container"]}>
      <input type="text" required="required" />
      <label>You'r name</label>
      <i></i>
    </div>
  </div>
);

export default Input_court;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_court = () => (
         <div>
          <div className="container">
        <input type="text" required="required" />
        <label>You'r name</label>
        <i></i>
    </div>
        </div>
        );

        export default Input_court;
        
        
         */
}
