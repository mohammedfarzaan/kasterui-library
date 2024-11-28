import React from "react";
import styles from "./Input_given.module.css";

const Input_given = () => (
  <div>
    <input
      type="text"
      name="search"
      placeholder="Search For AnyThink.."
      className={styles["input"]}
    />
  </div>
);

export default Input_given;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_given = () => (
         <div>
          <input type="text" name="search" placeholder="Search For AnyThink.." className="input" />
        </div>
        );

        export default Input_given;
        
        
         */
}