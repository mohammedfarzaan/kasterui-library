import React from "react";
import styles from "./Input_aboard.module.css";

const Input_aboard = () => (
  <div>
    <input
      type="text"
      name="text"
      placeholder="Search 'UIverse'"
      className={styles["input"]}
    />
  </div>
);

export default Input_aboard;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_aboard = () => (
         <div>
          <input type="text" name="text" placeholder="Search 'UIverse'" className="input" />
        </div>
        );

        export default Input_aboard;
        
        
         */
}
