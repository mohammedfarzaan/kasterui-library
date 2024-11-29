import React from "react";
import styles from "./Input_very.module.css";

const Input_very = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["input"]}
      placeholder="Type your text"
    />
  </div>
);

export default Input_very;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_very = () => (
         <div>
          <input type="text" name="text" className="input" placeholder="Type your text" />
        </div>
        );

        export default Input_very;
        
        
         */
}
