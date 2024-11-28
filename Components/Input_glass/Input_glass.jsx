import React from "react";
import styles from "./Input_glass.module.css";

const Input_glass = () => (
  <div>
    <input
      placeholder="Email"
      className={styles["input"]}
      name="text"
      type="email"
    />
  </div>
);

export default Input_glass;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_glass = () => (
         <div>
          <input placeholder="Email" className="input" name="text" type="email" />
        </div>
        );

        export default Input_glass;
        
        
         */
}
