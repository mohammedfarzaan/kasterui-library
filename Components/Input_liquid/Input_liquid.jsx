import React from "react";
import styles from "./Input_liquid.module.css";

const Input_liquid = () => (
  <div>
    <input
      type="text"
      className={styles["search-input"]}
      placeholder="Search..."
    />
  </div>
);

export default Input_liquid;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_liquid = () => (
         <div>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        );

        export default Input_liquid;
        
        
         */
}
