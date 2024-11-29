import React from "react";
import styles from "./Input_source.module.css";

const Input_source = () => (
  <div>
    <input
      className={styles["input"]}
      name="text"
      placeholder="Search..."
      type="search"
    />
  </div>
);

export default Input_source;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_source = () => (
         <div>
          <input className="input" name="text" placeholder="Search..." type="search" />
        </div>
        );

        export default Input_source;
        
        
         */
}
