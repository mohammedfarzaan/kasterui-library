import React from "react";
import styles from "./Input_feet.module.css";

const Input_feet = () => (
  <div>
    <input
      placeholder="Type here..."
      className={styles["styled-input"]}
      type="text"
    />
  </div>
);

export default Input_feet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_feet = () => (
         <div>
          <input placeholder="Type here..." className="styled-input" type="text" />
        </div>
        );

        export default Input_feet;
        
        
         */
}
