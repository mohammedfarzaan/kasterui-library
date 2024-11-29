import React from "react";
import styles from "./Input_stuck.module.css";

const Input_stuck = () => (
  <div>
    <div className={styles["inputBox"]}>
      <input required="" type="text" />
      <span>First name</span>
    </div>
  </div>
);

export default Input_stuck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_stuck = () => (
         <div>
          <div className="inputBox">
  <input required="" type="text" />
  <span>First name</span>
</div>
        </div>
        );

        export default Input_stuck;
        
        
         */
}
