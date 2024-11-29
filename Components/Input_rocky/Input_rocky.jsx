import React from "react";
import styles from "./Input_rocky.module.css";

const Input_rocky = () => (
  <div>
    <input
      placeholder="Type here..."
      className={styles["input"]}
      name="text"
      type="text"
    />
  </div>
);

export default Input_rocky;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_rocky = () => (
         <div>
          <input placeholder="Type here..." className="input" name="text" type="text" />
        </div>
        );

        export default Input_rocky;
        
        
         */
}
