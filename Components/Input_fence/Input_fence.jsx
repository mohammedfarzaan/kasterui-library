import React from "react";
import styles from "./Input_fence.module.css";

const Input_fence = () => (
  <div>
    <div className={styles["inp-border"] + styles["a1"]}>
      <input
        placeholder="Your Name"
        name="name1"
        type="text"
        className={styles["input"]}
      />
    </div>
  </div>
);

export default Input_fence;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_fence = () => (
         <div>
          <div className="inp-border a1">
      <input placeholder="Your Name" name="name1" type="text" className="input" />
  </div>
        </div>
        );

        export default Input_fence;
        
        
         */
}
