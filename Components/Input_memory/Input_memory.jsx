import React from "react";
import styles from "./Input_memory.module.css";

const Input_memory = () => (
  <div>
    <input
      placeholder="First name"
      className={styles["input"]}
      name="firstName"
      type="text"
    />
  </div>
);

export default Input_memory;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_memory = () => (
         <div>
          <input placeholder="First name" className="input" name="firstName" type="text" />
        </div>
        );

        export default Input_memory;
        
        
         */
}
