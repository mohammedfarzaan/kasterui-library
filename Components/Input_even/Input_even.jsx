import React from "react";
import styles from "./Input_even.module.css";

const Input_even = () => (
  <div>
    <input
      type="text"
      name="text"
      placeholder="Search 'UIverse'"
      className={styles["input"]}
    />
  </div>
);

export default Input_even;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_even = () => (
         <div>
          <input type="text" name="text" placeholder="Search 'UIverse'" className="input" />
        </div>
        );

        export default Input_even;
        
        
         */
}
