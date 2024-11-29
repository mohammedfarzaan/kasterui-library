import React from "react";
import styles from "./Input_save.module.css";

const Input_save = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["input"]}
      placeholder="Type here..."
    />
  </div>
);

export default Input_save;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_save = () => (
         <div>
          <input type="text" name="text" className="input" placeholder="Type here..." />
        </div>
        );

        export default Input_save;
        
        
         */
}
