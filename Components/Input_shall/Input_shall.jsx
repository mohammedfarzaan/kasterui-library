import React from "react";
import styles from "./Input_shall.module.css";

const Input_shall = () => (
  <div>
    <input
      type="text"
      autocomplete="off"
      placeholder="Type your text"
      name="text"
      className={styles["input"]}
    />
  </div>
);

export default Input_shall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_shall = () => (
         <div>
          <input type="text" autocomplete="off" placeholder="Type your text" name="text" className="input" />
        </div>
        );

        export default Input_shall;
        
        
         */
}
