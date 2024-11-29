import React from "react";
import styles from "./Input_vapor.module.css";

const Input_vapor = () => (
  <div>
    <input
      type="text"
      className={styles["search-input"]}
      placeholder="Search..."
    />
  </div>
);

export default Input_vapor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_vapor = () => (
         <div>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        );

        export default Input_vapor;
        
        
         */
}
