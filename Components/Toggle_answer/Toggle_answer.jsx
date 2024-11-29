import React from "react";
import styles from "./Toggle_answer.module.css";

const Toggle_answer = () => (
  <div>
    <label className={styles["container"]}>
      <input type="checkbox" />
      <div className={styles["checkmark"]}>
        <div className={styles["switch"]}></div>
      </div>
    </label>
  </div>
);

export default Toggle_answer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_answer = () => (
         <div>
          <label className="container">
  <input type="checkbox" />
  <div className="checkmark">
    <div className="switch"></div>
  </div>
</label>
        </div>
        );

        export default Toggle_answer;
        
        
         */
}
