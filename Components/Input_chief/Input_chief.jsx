import React from "react";
import styles from "./Input_chief.module.css";

const Input_chief = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["input"]}
      placeholder="Write a message"
    />
  </div>
);

export default Input_chief;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_chief = () => (
         <div>
          <input type="text" name="text" className="input" placeholder="Write a message" />
        </div>
        );

        export default Input_chief;
        
        
         */
}
