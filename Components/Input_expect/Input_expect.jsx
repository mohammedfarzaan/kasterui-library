import React from "react";
import styles from "./Input_expect.module.css";

const Input_expect = () => (
  <div>
    <input
      placeholder="Type something..."
      className={styles["input"]}
      name="text"
      type="text"
    />
  </div>
);

export default Input_expect;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_expect = () => (
         <div>
          <input placeholder="Type something..." className="input" name="text" type="text" />
        </div>
        );

        export default Input_expect;
        
        
         */
}
