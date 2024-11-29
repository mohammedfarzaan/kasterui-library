import React from "react";
import styles from "./Input_bear.module.css";

const Input_bear = () => (
  <div>
    <div className={styles["inputbox"]}>
      <input required="required" type="text" />
      <span>Username</span>
      <i></i>
    </div>
  </div>
);

export default Input_bear;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_bear = () => (
         <div>
          <div className="inputbox">
    <input required="required" type="text" />
    <span>Username</span>
    <i></i>
</div>
        </div>
        );

        export default Input_bear;
        
        
         */
}
