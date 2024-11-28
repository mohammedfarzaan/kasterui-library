import React from "react";
import styles from "./Input_choice.module.css";

const Input_choice = () => (
  <div>
    <input type="text" name="text" className={styles["input"]} />
    <input type="text" name="text" className={styles["input"]} />
    <input type="text" name="text" className={styles["input"]} />
  </div>
);

export default Input_choice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_choice = () => (
         <div>
          <input type="text" name="text" className="input" />
<input type="text" name="text" className="input" />
<input type="text" name="text" className="input" />
        </div>
        );

        export default Input_choice;
        
        
         */
}
