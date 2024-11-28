import React from "react";
import styles from "./Input_with.module.css";

const Input_with = () => (
  <div>
    <input
      type="password"
      placeholder="Password"
      name="text"
      className={styles["input"]}
    />
  </div>
);

export default Input_with;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_with = () => (
         <div>
          <input type="password" placeholder="Password" name="text" className="input" />
        </div>
        );

        export default Input_with;
        
        
         */
}
