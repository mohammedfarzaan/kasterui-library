import React from "react";
import styles from "./Input_minute.module.css";

const Input_minute = () => (
  <div>
    <input
      className={styles["input"]}
      name="text"
      type="text"
      placeholder="Name"
    />
  </div>
);

export default Input_minute;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_minute = () => (
         <div>
          <input className="input" name="text" type="text" placeholder="Name" />
        </div>
        );

        export default Input_minute;
        
        
         */
}