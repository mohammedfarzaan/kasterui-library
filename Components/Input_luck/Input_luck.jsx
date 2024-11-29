import React from "react";
import styles from "./Input_luck.module.css";

const Input_luck = () => (
  <div>
    <input
      placeholder="Username"
      type="text"
      name="text"
      className={styles["input"]}
    />
  </div>
);

export default Input_luck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_luck = () => (
         <div>
          <input placeholder="Username" type="text" name="text" className="input" />
        </div>
        );

        export default Input_luck;
        
        
         */
}
