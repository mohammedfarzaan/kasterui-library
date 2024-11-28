import React from "react";
import styles from "./Input_level.module.css";

const Input_level = () => (
  <div>
    <input
      placeholder="Enter your name"
      className={styles["input"]}
      type="text"
    />
  </div>
);

export default Input_level;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_level = () => (
         <div>
          <input placeholder="Enter your name" className="input" type="text" />
        </div>
        );

        export default Input_level;
        
        
         */
}
