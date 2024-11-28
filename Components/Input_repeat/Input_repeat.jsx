import React from "react";
import styles from "./Input_repeat.module.css";

const Input_repeat = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["input"]}
      placeholder="Type..."
    />
  </div>
);

export default Input_repeat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_repeat = () => (
         <div>
          <input type="text" name="text" className="input" placeholder="Type..." />
        </div>
        );

        export default Input_repeat;
        
        
         */
}
