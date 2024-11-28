import React from "react";
import styles from "./Input_ought.module.css";

const Input_ought = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["input"]}
      placeholder="Search the web..."
    />
  </div>
);

export default Input_ought;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_ought = () => (
         <div>
          <input type="text" name="text" className="input" placeholder="Search the web..." />
        </div>
        );

        export default Input_ought;
        
        
         */
}
