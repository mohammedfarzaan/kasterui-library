import React from "react";
import styles from "./Input_blew.module.css";

const Input_blew = () => (
  <div>
    <input
      placeholder="Enter text here"
      className={styles["input-style"]}
      type="text"
    />
  </div>
);

export default Input_blew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_blew = () => (
         <div>
          <input placeholder="Enter text here" className="input-style" type="text" />
        </div>
        );

        export default Input_blew;
        
        
         */
}
