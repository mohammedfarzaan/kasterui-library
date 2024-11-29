import React from "react";
import styles from "./Input_share.module.css";

const Input_share = () => (
  <div>
    <input
      placeholder="Enter text here"
      className={styles["input-style"]}
      type="text"
    />
  </div>
);

export default Input_share;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_share = () => (
         <div>
          <input placeholder="Enter text here" className="input-style" type="text" />
        </div>
        );

        export default Input_share;
        
        
         */
}
