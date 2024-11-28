import React from "react";
import styles from "./Input_art.module.css";

const Input_art = () => (
  <div>
    <input
      type="text"
      id="email-id"
      name="text"
      className={styles["input__email"]}
      placeholder="Email Address"
    />
  </div>
);

export default Input_art;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_art = () => (
         <div>
          <input type="text" id="email-id" name="text" className="input__email" placeholder="Email Address" />
        </div>
        );

        export default Input_art;
        
        
         */
}
