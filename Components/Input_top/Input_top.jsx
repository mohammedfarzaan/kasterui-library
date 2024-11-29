import React from "react";
import styles from "./Input_top.module.css";

const Input_top = () => (
  <div>
    <input
      className={styles["input"]}
      placeholder="typed here..."
      name="text"
      type="text"
    />
  </div>
);

export default Input_top;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_top = () => (
         <div>
          <input className="input" placeholder="typed here..." name="text" type="text" />
        </div>
        );

        export default Input_top;
        
        
         */
}
