import React from "react";
import styles from "./Input_troops.module.css";

const Input_troops = () => (
  <div>
    <input
      placeholder="Enter your text..."
      className={styles["input"]}
      name="text"
      type="text"
    />
  </div>
);

export default Input_troops;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_troops = () => (
         <div>
          <input placeholder="Enter your text..." className="input" name="text" type="text" />
        </div>
        );

        export default Input_troops;
        
        
         */
}
