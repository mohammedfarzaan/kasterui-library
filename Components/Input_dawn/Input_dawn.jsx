import React from "react";
import styles from "./Input_dawn.module.css";

const Input_dawn = () => (
  <div>
    <input
      type="password"
      name="text"
      className={styles["input"]}
      placeholder="Enter your password!"
    />
  </div>
);

export default Input_dawn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_dawn = () => (
         <div>
          <input type="password" name="text" className="input" placeholder="Enter your password!" />
        </div>
        );

        export default Input_dawn;
        
        
         */
}
