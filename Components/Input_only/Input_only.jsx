import React from "react";
import styles from "./Input_only.module.css";

const Input_only = () => (
  <div>
    <input
      type="text"
      placeholder="Write here..."
      name="text"
      className={styles["input"]}
    />
  </div>
);

export default Input_only;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_only = () => (
         <div>
          <input type="text" placeholder="Write here..." name="text" className="input" />
        </div>
        );

        export default Input_only;
        
        
         */
}
